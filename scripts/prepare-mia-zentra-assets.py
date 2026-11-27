"""Generate only the five visually privacy-reviewed owner screenshots.
Requires Pillow. All MIA sources show empty login forms, not private records.
No redactions are necessary for these reviewed inputs; refuse changed sources.
Legacy sanitized assets are deliberately left untouched.
"""
import hashlib
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
assets = root / 'public/assets/projects'
sources = {
    'zentra-digital-solution': 'zentradigitalsolution.png',
    'mia-crm': 'mia-CRM.png',
    'mia-training': 'mia-training.png',
    'mia-absensi': 'mia-absensi.png',
    'mia-admin': 'mia-admin.png',
}
manifest_path = root / 'src/asset-dimensions.json'
manifest = json.loads(manifest_path.read_text())
audit_path = root / 'docs/verification/mia-zentra-assets.json'
previous = json.loads(audit_path.read_text()) if audit_path.exists() else {}
audit = {}
for slug, filename in sources.items():
    source = assets / filename
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    if slug in previous and previous[slug]['sha256'] != digest:
        raise ValueError(f'{filename}: source changed; repeat visual privacy review first')
    with Image.open(source) as original:
        image = original.convert('RGB')
        image.save(assets / f'{slug}.webp', 'WEBP', lossless=True)
        widths = [w for w in (480, 960) if w < image.width]
        for width in widths:
            height = round(image.height * width / image.width)
            image.resize((width, height), Image.Resampling.LANCZOS).save(
                assets / f'{slug}-{width}.webp', 'WEBP', quality=85)
        manifest[slug] = {'width': image.width, 'height': image.height, 'widths': widths}
        audit[slug] = {'source': filename, 'sha256': digest, 'cover': f'{slug}.webp',
                       'privacy': 'Reviewed: empty login fields, no private records or credentials visible.' if slug.startswith('mia-') else 'Reviewed: public business homepage.',
                       'redactions': [], **manifest[slug]}
manifest_path.write_text(json.dumps(manifest, indent=2) + '\n')
audit_path.parent.mkdir(parents=True, exist_ok=True)
audit_path.write_text(json.dumps(audit, indent=2) + '\n')
print(f'Generated {len(sources)} reviewed covers and responsive variants; legacy assets unchanged.')
