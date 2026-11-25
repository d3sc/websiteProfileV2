"""Aggregate actual Playwright JSON reports, retaining the latest result per case."""
import base64
from collections import Counter, defaultdict
import json
from pathlib import Path
import sys

root = Path(__file__).resolve().parents[1] / 'docs/verification/playwright'
latest = {}
runs = []

def specs(suite):
    yield from suite.get('specs', [])
    for child in suite.get('suites', []):
        yield from specs(child)

for run in sys.argv[1:]:
    data = json.loads((root / run / 'results.json').read_text())
    counts = Counter()
    for suite in data.get('suites', []):
        for spec in specs(suite):
            for case in spec.get('tests', []):
                result = case['results'][-1] if case.get('results') else {'status': 'skipped', 'duration': 0}
                counts[result['status']] += 1
                row = {'project': case['projectName'], 'file': spec['file'], 'scenario': spec['title'], 'status': result['status'], 'duration_ms': result['duration'], 'run': run, 'diagnostics': None, 'axe': [], 'artifacts': []}
                for a in result.get('attachments', []):
                    if a.get('path'):
                        row['artifacts'].append({'name': a['name'], 'path': a['path']})
                    if a.get('body') and a.get('contentType') == 'application/json':
                        obj = json.loads(base64.b64decode(a['body']))
                        if a['name'] == 'browser-diagnostics':
                            row['diagnostics'] = obj
                        elif a['name'].startswith('axe-'):
                            row['axe'].append(obj)
                # A max-failures abort must not erase an earlier completed result.
                key = (row['project'], row['file'], row['scenario'])
                if row['status'] != 'skipped' or key not in latest:
                    latest[key] = row
    resources = json.loads((root / run / 'resources.json').read_text())
    samples = resources['samples']
    runs.append({'run': run, 'exit_code': resources['exit_code'], 'duration_s': resources['duration_s'], 'counts': dict(counts), 'non_test_errors': data.get('errors', []), 'min_available_MiB': round(min(s['MemAvailable_KiB'] for s in samples)/1024, 2), 'min_swap_free_MiB': round(min(s['SwapFree_KiB'] for s in samples)/1024, 2)})

projects = defaultdict(lambda: {'counts': Counter(), 'browsers': set(), 'versions': set(), 'viewport': None, 'console_page_network_http_errors': [], 'axe_audits': 0, 'axe_violations': 0, 'incomplete_rule_ids': set()})
for row in latest.values():
    p = projects[row['project']]
    p['counts'][row['status']] += 1
    diag = row['diagnostics']
    if diag:
        p['browsers'].add(diag['browser'])
        p['versions'].add(diag['version'])
        p['viewport'] = diag['viewport']
        p['console_page_network_http_errors'].extend(diag['errors'])
    for audit in row['axe']:
        p['axe_audits'] += 1
        p['axe_violations'] += len(audit['violations'])
        p['incomplete_rule_ids'].update(r['id'] for r in audit['incomplete'])
summary = {'runs': runs, 'projects': {name: {**p, 'counts': dict(p['counts']), 'browsers': sorted(p['browsers']), 'versions': sorted(p['versions']), 'incomplete_rule_ids': sorted(p['incomplete_rule_ids'])} for name,p in projects.items()}, 'cases': list(latest.values())}
(root/'final-summary.json').write_text(json.dumps(summary,indent=2))
print(json.dumps({'runs':runs,'projects':summary['projects']},indent=2))
