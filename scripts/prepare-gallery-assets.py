"""Prepare authentic, privacy-reviewed portfolio assets; never synthesize UI.
Requires Pillow. Existing sources are backed up outside the public tree before redaction.
"""
import json
import shutil
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
assets = root / 'public/assets/projects'
backup = Path('/tmp/websiteProfileV2-gallery-originals')
backup.mkdir(exist_ok=True, mode=0o700)
backup.chmod(0o700)
# Solid masks, not reversible CSS overlays or blur. Coordinates are source pixels.
redactions = {
    'vps-manager': [(1320, 465, 1735, 830)],
    'proxmox-home-lab': [(0, 88, 376, 675), (390, 48, 590, 90),
        (1655, 0, 1789, 44), (580, 96, 1230, 125),
        (580, 280, 790, 315), (0, 762, 1789, 924)],
}
for slug, boxes in redactions.items():
    path = assets / f'{slug}.webp'
    saved = backup / path.name
    if not saved.exists():
        shutil.copy2(path, saved)
        saved.chmod(0o600)
    image = Image.open(path).convert('RGB')
    expected = {'vps-manager': (1787, 926), 'proxmox-home-lab': (1789, 924)}[slug]
    if image.size != expected:
        raise ValueError(f'{slug}: source dimensions changed; review privacy masks before publishing')
    draw = ImageDraw.Draw(image)
    for x1,y1,x2,y2 in boxes:
        draw.rectangle((x1,y1,x2,y2), fill='#262b32')
        if x2-x1 > 180:
            draw.text((x1+12,y1+10), '[ PRIVATE DATA REDACTED ]', fill='#dde2e7')
    image.save(path, 'WEBP', lossless=True)

# Detail crops are labelled in UI as crops of the SAME overview, not new screens.
crops = {
    'vps-manager-metrics': ('vps-manager', (320, 180, 1768, 372)),
    'helpdesk-ticketing-filters': ('helpdesk-ticketing', (178, 460, 1614, 748)),
    'lms-ujian-online-controls': ('lms-ujian-online', (344, 302, 1770, 611)),
}
for target,(source,box) in crops.items():
    Image.open(assets/f'{source}.webp').crop(box).save(assets/f'{target}.webp','WEBP',quality=88)

manifest = {}
for path in sorted(assets.glob('*.webp')):
    if path.stem.endswith(('-480','-960')) or path.stem == 'anime-scraping':
        continue
    image = Image.open(path)
    widths=[]
    for width in (480,960):
        if image.width > width:
            h=round(image.height*width/image.width)
            dest=path.with_stem(f'{path.stem}-{width}')
            image.resize((width,h),Image.Resampling.LANCZOS).save(dest,'WEBP',quality=82)
            widths.append(width)
    manifest[path.stem]={'width':image.width,'height':image.height,'widths':widths}
(root/'src/asset-dimensions.json').write_text(json.dumps(manifest,indent=2)+'\n')
report = {'backup':str(backup),'redactions':redactions,'crops':{k:{'source':v[0],'box':v[1]} for k,v in crops.items()},'assets':manifest}
(root/'docs/verification/gallery/asset-audit.json').write_text(json.dumps(report,indent=2)+'\n')
print('Prepared',len(manifest),'source/crop assets and responsive derivatives. Raw backups outside public:',backup)
