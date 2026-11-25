"""Run one Playwright job with resource samples; no unrelated process control."""
import datetime
import json
import os
from pathlib import Path
import subprocess
import sys
import time

run, *args = sys.argv[1:]
root = Path(__file__).resolve().parents[1]
out = root / 'docs/verification/playwright' / run
out.mkdir(parents=True, exist_ok=True)
env = dict(os.environ, PORTFOLIO_QA_RUN=run, DEBUG='pw:webserver')
command = ['node', 'node_modules/@playwright/test/cli.js', 'test', '--config=playwright.diagnostic.config.ts', '--workers=1', *args]
print('Starting:', run, ' '.join(args), flush=True)
samples = []
with (out / 'runner.log').open('w') as log:
    process = subprocess.Popen(command, cwd=root, env=env, stdout=log, stderr=subprocess.STDOUT)
    start = time.monotonic()
    while True:
        mem = {}
        for line in Path('/proc/meminfo').read_text().splitlines():
            key, value = line.split(':', 1)
            if key in ('MemAvailable', 'SwapFree', 'MemTotal', 'SwapTotal'):
                mem[key + '_KiB'] = int(value.strip().split()[0])
        vm = dict(line.split() for line in Path('/proc/vmstat').read_text().splitlines())
        samples.append({'elapsed_s': round(time.monotonic() - start, 2), 'time': datetime.datetime.now().astimezone().isoformat(), **mem, 'pgmajfault': int(vm['pgmajfault']), 'pswpin': int(vm['pswpin']), 'pswpout': int(vm['pswpout']), 'memory_pressure': Path('/proc/pressure/memory').read_text().strip()})
        code = process.poll()
        if code is not None:
            break
        time.sleep(2)
(out / 'resources.json').write_text(json.dumps({'command': command, 'exit_code': code, 'duration_s': round(time.monotonic() - start, 2), 'samples': samples}, indent=2))
print((out / 'runner.log').read_text()[-18000:], flush=True)
print('Finished:', run, 'exit', code, flush=True)
sys.exit(code)
