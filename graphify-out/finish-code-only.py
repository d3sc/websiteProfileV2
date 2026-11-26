import json, hashlib, subprocess
from pathlib import Path
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from graphify.export import to_json
from graphify.diagnostics import diagnose_extraction, format_diagnostic_report

root = Path.cwd()
p = root / 'graphify-out'
tracked = subprocess.check_output(['git', 'ls-files', '-z']).decode().split('\0')
fingerprints = {f: hashlib.sha256((root/f).read_bytes()).hexdigest() for f in tracked if f and (root/f).is_file()}
(p/'tracked-before.json').write_text(json.dumps(fingerprints, indent=2))
ast = json.loads((p/'.graphify_ast.json').read_text())
assert ast['nodes'] and ast['edges']
assert all(n.get('_origin') == 'ast' for n in ast['nodes'])
detection = json.loads((p/'.graphify_detect.json').read_text())
code = detection['files']['code']
assert not [f for f in code if Path(f).is_file() and Path(f).stat().st_mtime > (p/'.graphify_ast.json').stat().st_mtime]
detection['files'] = {'code': code, 'document': [], 'paper': [], 'image': [], 'video': []}
detection['total_files'] = len(code)
detection['total_words'] = sum(len(Path(f).read_text(errors='replace').split()) for f in code)
(p/'code-only-detection.json').write_text(json.dumps(detection, indent=2))
G = build_from_json(ast, root=str(root), directed=False)
assert G.number_of_nodes() > 0
communities = cluster(G)
cohesion = score_all(G, communities)
gods = god_nodes(G)
surprises = surprising_connections(G, communities)
labels = {cid: 'Community ' + str(cid) for cid in communities}
questions = suggest_questions(G, communities, labels)
assert to_json(G, communities, str(p/'graph.json'), force=False)
report = generate(G, communities, cohesion, labels, gods, surprises, detection, {'input': 0, 'output': 0}, str(root), suggested_questions=questions)
report += '\n\n## Code-only scope and provenance\n\nReused existing deterministic AST extraction (151 nodes / 268 raw edges), with no code sources newer than the extraction. Documents and images deliberately excluded. No semantic extraction or API calls. Token cost for this code-only build: 0 input / 0 output.\n\n`graphify-out/` is written into the Git working tree; source files were not modified.\n'
(p/'GRAPH_REPORT.md').write_text(report)
analysis = {'communities': {str(k): v for k,v in communities.items()}, 'cohesion': {str(k): v for k,v in cohesion.items()}, 'gods': gods, 'surprises': surprises, 'questions': questions}
(p/'.graphify_analysis.json').write_text(json.dumps(analysis, indent=2))
health = diagnose_extraction(ast, directed=False, root=str(root))
(p/'code-only-health.json').write_text(json.dumps(health, indent=2))
print(format_diagnostic_report(health))
print('Graph:',G.number_of_nodes(),'nodes,',G.number_of_edges(),'edges,',len(communities),'communities')
for cid, nodes in communities.items():
    print('COMMUNITY',cid,'cohesion',cohesion[cid], [(G.nodes[n].get('label',n),G.nodes[n].get('source_file')) for n in nodes])
