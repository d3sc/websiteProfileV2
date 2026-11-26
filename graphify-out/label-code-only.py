import json
from pathlib import Path
from datetime import datetime, timezone
from graphify.build import build_from_json
from graphify.analyze import suggest_questions
from graphify.report import generate
from graphify.export import to_json
from graphify.detect import save_manifest

p=Path('graphify-out'); root=Path.cwd()
a=json.loads((p/'.graphify_ast.json').read_text())
d=json.loads((p/'code-only-detection.json').read_text())
s=json.loads((p/'.graphify_analysis.json').read_text())
G=build_from_json(a,root=str(root),directed=False)
c={int(k):v for k,v in s['communities'].items()}
cohesion={int(k):v for k,v in s['cohesion'].items()}
labels={0:'Development Toolchain',1:'Portfolio Data and Routing',2:'Application TypeScript Configuration',3:'QA Report Automation',4:'Playwright Browser Tests',5:'Portfolio UI Components',6:'Node TypeScript Configuration',7:'Content Verification Script',8:'Package Run Scripts',9:'React Application Entry',10:'TypeScript Project References',11:'Vite Type Declarations'}
questions=suggest_questions(G,c,labels)
assert to_json(G,c,str(p/'graph.json'),community_labels=labels)
report=generate(G,c,cohesion,labels,s['gods'],s['surprises'],d,{'input':0,'output':0},str(root),suggested_questions=questions)
health=json.loads((p/'code-only-health.json').read_text())
report+='\n\n## Code-only scope and provenance\n\nReused existing deterministic AST extraction: 151 raw nodes and 268 raw edges from 50 code files; no source files were newer than the AST. Documents and images intentionally excluded. No semantic extraction or API calls. This code-only build used 0 input / 0 output LLM tokens. Earlier blocked semantic worker usage is not included in that zero-cost figure.\n\nGraph build produces 167 nodes / 262 edges, including automatically materialized reference endpoints. Graph health warning: 15 raw dangling-endpoint edges, 5 external-reference edges, 1 self-loop, and 6 undirected same-endpoint collapsed edges. The raw AST and code-only-health.json are retained for audit; the graph is usable but not a complete or lossless call graph.\n\n`graphify-out/` was written into the Git working tree. No source files or ignore rules were modified.\n'
(p/'GRAPH_REPORT.md').write_text(report)
(p/'.graphify_labels.json').write_text(json.dumps({str(k):v for k,v in labels.items()},indent=2))
s['questions']=questions
(p/'.graphify_analysis.json').write_text(json.dumps(s,indent=2))
save_manifest(d['files'],root=str(root),scan_corpus=set(d['files']['code']))
cost_path=p/'cost.json'
cost=json.loads(cost_path.read_text()) if cost_path.exists() else {'runs':[],'total_input_tokens':0,'total_output_tokens':0}
cost['runs'].append({'date':datetime.now(timezone.utc).isoformat(),'scope':'code-only AST reuse','input_tokens':0,'output_tokens':0,'files':len(d['files']['code'])})
cost_path.write_text(json.dumps(cost,indent=2))
print('Labeled graph and report saved; code-only manifest saved.')
print('Example labels:',[n.get('label') for n in json.loads((p/'graph.json').read_text())['nodes'] if 'Hero' in n.get('label','') or 'route' in n.get('label','').lower()])
