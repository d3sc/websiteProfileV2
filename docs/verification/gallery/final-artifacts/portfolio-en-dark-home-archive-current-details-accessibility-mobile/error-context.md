# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.test.ts >> en/dark: home, archive, current details, accessibility
- Location: e2e/portfolio.test.ts:115:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 208

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#191b18",
+               "colorParse": undefined,
+               "contrastRatio": 3.05,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#656860",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+               "shadowColor": undefined,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<html lang=\"en\" data-theme=\"dark\">",
+                 "target": Array [
+                   "html",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"eyebrow\"><span class=\"cross\" aria-hidden=\"true\">+</span> Full-Stack Developer · Linux &amp; Self-Hosting</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hero-identity > .eyebrow",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#191b18",
+               "colorParse": undefined,
+               "contrastRatio": 3.05,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#656860",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+               "shadowColor": undefined,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<html lang=\"en\" data-theme=\"dark\">",
+                 "target": Array [
+                   "html",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"hero-copy\">I build web applications for everyday operations: VPS services, online exams, and ticketing. My focus is backend development, automation, and applications on Linux servers.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hero-copy",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#778a48",
+               "colorParse": undefined,
+               "contrastRatio": 4.49,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#191d13",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+               "shadowColor": undefined,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.49 (foreground color: #191d13, background color: #778a48, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a class=\"button primary\" href=\"#/#selected-projects\">View Projects<span aria-hidden=\"true\">↗</span></a>",
+                 "target": Array [
+                   "a[href$=\"#/#selected-projects\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.49 (foreground color: #191d13, background color: #778a48, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"button primary\" href=\"#/#selected-projects\">View Projects<span aria-hidden=\"true\">↗</span></a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"#/#selected-projects\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#191b18",
+               "colorParse": undefined,
+               "contrastRatio": 3.05,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#656860",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+               "shadowColor": undefined,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<html lang=\"en\" data-theme=\"dark\">",
+                 "target": Array [
+                   "html",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>01 — PERSONAL PORTFOLIO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hero-footnote > span:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#191b18",
+               "colorParse": undefined,
+               "contrastRatio": 3.05,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#656860",
+               "fontSize": "6.0pt (8px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+               "shadowColor": undefined,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<html lang=\"en\" data-theme=\"dark\">",
+                 "target": Array [
+                   "html",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.05 (foreground color: #656860, background color: #191b18, font size: 6.0pt (8px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>BACKEND / LINUX / AUTOMATION</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hero-footnote > span:nth-child(2)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to content" [ref=e3] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Ikbar Rabbani Purwanto" [ref=e6] [cursor=pointer]:
        - /url: "#/"
        - text: ir
        - generic [ref=e7]: /
        - generic [ref=e8]: developerfield notes
      - button "Menu" [ref=e9] [cursor=pointer]: Menu +
      - generic [ref=e10]:
        - button "Switch language" [ref=e11] [cursor=pointer]: EN
        - button "Switch to light theme" [ref=e12] [cursor=pointer]: ☀
  - main [active] [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - paragraph [ref=e17]: + Full-Stack Developer · Linux & Self-Hosting
          - heading "Ikbar Rabbani Purwanto." [level=1] [ref=e18]: IkbarRabbaniPurwanto.
          - paragraph [ref=e19]: "I build web applications for everyday operations: VPS services, online exams, and ticketing. My focus is backend development, automation, and applications on Linux servers."
          - generic [ref=e20]:
            - link "View Projects" [ref=e21] [cursor=pointer]:
              - /url: "#/#selected-projects"
              - text: View Projects
              - generic [aria-hidden] [ref=e22]: ↗
            - link "Contact Me" [ref=e23] [cursor=pointer]:
              - /url: "#/#contact"
              - text: Contact Me
              - generic [aria-hidden] [ref=e24]: ↘
          - generic [ref=e25]:
            - generic [ref=e26]: 01 — PERSONAL PORTFOLIO
            - generic [ref=e27]: BACKEND / LINUX / AUTOMATION
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]: Selected work
            - generic [ref=e32]: INDEX / 01
          - tabpanel "01 VPS Manager" [ref=e34]:
            - img "VPS Manager — Service dashboard" [ref=e36]
            - generic [ref=e37]:
              - generic [ref=e38]: Web apps / Bun
              - heading "VPS Manager" [level=2] [ref=e39]
              - paragraph [ref=e40]: A dashboard for customers, VPS services, payments, and billing reminders.
              - link "View details" [ref=e41] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: View details
                - generic [aria-hidden] [ref=e42]: ↗
          - tablist "Choose a project" [ref=e43]:
            - tab "01 VPS Manager" [selected] [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: "01"
              - generic [ref=e46]: VPS Manager
              - generic [aria-hidden] [ref=e47]: ↗
            - tab "02 Proxmox Home Lab" [ref=e48] [cursor=pointer]:
              - generic [ref=e49]: "02"
              - generic [ref=e50]: Proxmox Home Lab
              - generic [aria-hidden] [ref=e51]: ↗
            - tab "03 LMS Ujian Online" [ref=e52] [cursor=pointer]:
              - generic [ref=e53]: "03"
              - generic [ref=e54]: LMS Ujian Online
              - generic [aria-hidden] [ref=e55]: ↗
      - generic [ref=e57]:
        - generic [ref=e58]: DEVELOPER FIELD NOTES
        - generic [ref=e59]: Learning → Evolving → Innovating
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - paragraph [ref=e63]: 01 / Selected work
            - heading "Built to be used." [level=2] [ref=e64]: Built tobe used.
          - paragraph [ref=e65]: Operational applications, backends, and infrastructure I manage myself.
        - generic [ref=e66]:
          - article [ref=e67]:
            - 'link "View details: VPS Manager" [ref=e68] [cursor=pointer]':
              - /url: "#/projects/vps-manager"
              - img "VPS Manager — Service dashboard" [ref=e69]
              - generic [ref=e70]: Screenshot preview / 02
              - generic [aria-hidden] [ref=e71]: ↗
            - generic [ref=e72]:
              - paragraph [ref=e73]: /01 — Web App
              - heading [level=3] [ref=e74]:
                - link "VPS Manager" [ref=e75] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
              - paragraph [ref=e76]: A dashboard for customers, VPS services, payments, and billing reminders.
              - paragraph [ref=e77]: History tested · notifications mocked
              - paragraph [ref=e78]:
                - strong [ref=e79]: What I built
                - text: I built service and payment workflows. In the history view, I added request sequencing so stale responses, errors, and loading completions cannot overwrite the latest state.
              - list "Stack" [ref=e80]:
                - listitem [ref=e81]: Bun
                - listitem [ref=e82]: Elysia
                - listitem [ref=e83]: Astro
                - listitem [ref=e84]: TypeScript
                - listitem [ref=e85]: Drizzle
                - listitem [ref=e86]: PostgreSQL
                - listitem [ref=e87]: Docker Compose
              - link "Open gallery ↗" [ref=e89] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
          - article [ref=e90]:
            - 'link "View details: Proxmox Home Lab" [ref=e91] [cursor=pointer]':
              - /url: "#/projects/proxmox-home-lab"
              - img "Proxmox Home Lab — Administration console" [ref=e92]
              - generic [ref=e93]: Screenshot preview / 01
              - generic [aria-hidden] [ref=e94]: ↗
            - generic [ref=e95]:
              - paragraph [ref=e96]: /02 — Infrastructure
              - heading [level=3] [ref=e97]:
                - link "Proxmox Home Lab" [ref=e98] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
              - paragraph [ref=e99]: A Linux VM lab with a separate bridge, NAT, firewall, and remote access.
              - paragraph [ref=e100]: Personal lab · isolation unconfirmed
              - list "Stack" [ref=e101]:
                - listitem [ref=e102]: Proxmox
                - listitem [ref=e103]: Linux
                - listitem [ref=e104]: VM
                - listitem [ref=e105]: Bridge
                - listitem [ref=e106]: NAT
                - listitem [ref=e107]: Firewall
                - listitem [ref=e108]: Tailscale
              - link "Open gallery ↗" [ref=e110] [cursor=pointer]:
                - /url: "#/projects/proxmox-home-lab"
          - article [ref=e111]:
            - 'link "View details: LMS Ujian Online" [ref=e112] [cursor=pointer]':
              - /url: "#/projects/lms-ujian-online"
              - img "LMS Ujian Online — Admin dashboard" [ref=e113]
              - generic [ref=e114]: Screenshot preview / 02
              - generic [aria-hidden] [ref=e115]: ↗
            - generic [ref=e116]:
              - paragraph [ref=e117]: /03 — Web App
              - heading [level=3] [ref=e118]:
                - link "LMS Ujian Online" [ref=e119] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
              - paragraph [ref=e120]: Role-based online exams with admin and student views, multiple choice, essays, time limits, and grading.
              - paragraph [ref=e121]: Grading tested · student flow partial
              - list "Stack" [ref=e122]:
                - listitem [ref=e123]: Laravel
                - listitem [ref=e124]: PHP
                - listitem [ref=e125]: PostgreSQL
                - listitem [ref=e126]: Blade
                - listitem [ref=e127]: JavaScript
                - listitem [ref=e128]: Tailwind CSS
                - listitem [ref=e129]: Alpine.js
              - link "Open gallery ↗" [ref=e131] [cursor=pointer]:
                - /url: "#/projects/lms-ujian-online"
        - link "Explore all projects 05 projects" [ref=e132] [cursor=pointer]:
          - /url: "#/projects"
          - generic [ref=e133]: Explore all projects
          - generic [ref=e134]: 05 projects ↗
      - generic [ref=e135]:
        - generic [ref=e137]:
          - paragraph [ref=e138]: ↳ Other work
          - heading "Other work" [level=2] [ref=e139]
        - generic [ref=e140]:
          - article [ref=e141]:
            - 'link "View details: Helpdesk Ticketing" [ref=e142] [cursor=pointer]':
              - /url: "#/projects/helpdesk-ticketing"
              - img "Helpdesk Ticketing — Ticket queue" [ref=e143]
              - generic [ref=e144]: Screenshot preview / 02
              - generic [aria-hidden] [ref=e145]: ↗
            - generic [ref=e146]:
              - paragraph [ref=e147]: /04 — Web App
              - heading [level=3] [ref=e148]:
                - link "Helpdesk Ticketing" [ref=e149] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
              - paragraph [ref=e150]: Role-based ticket management with Telegram integration for new tickets.
              - paragraph [ref=e151]: Browser tested · Telegram mocked
              - list "Stack" [ref=e152]:
                - listitem [ref=e153]: Flask
                - listitem [ref=e154]: Python
                - listitem [ref=e155]: MySQL
                - listitem [ref=e156]: JavaScript
                - listitem [ref=e157]: Telegram Bot API
              - link "Open gallery ↗" [ref=e159] [cursor=pointer]:
                - /url: "#/projects/helpdesk-ticketing"
          - article [ref=e160]:
            - 'link "View details: Trading Analysis Dashboard" [ref=e161] [cursor=pointer]':
              - /url: "#/projects/trading-analysis-dashboard"
              - generic [ref=e162]:
                - generic [ref=e163]: FIELD NOTE / 05
                - generic [aria-hidden] [ref=e164]: "05"
                - paragraph [ref=e165]: IDX / US / GOLD
                - generic [ref=e166]: WATCHLIST / CHARTS / SCORING
              - generic [aria-hidden] [ref=e167]: ↗
            - generic [ref=e168]:
              - paragraph [ref=e169]: /05 — Web App
              - heading [level=3] [ref=e170]:
                - link "Trading Analysis Dashboard" [ref=e171] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
              - paragraph [ref=e172]: IDX, US, and gold watchlists with historical charts, technical indicators, and scoring.
              - paragraph [ref=e173]: Support reminders · in development
              - list "Stack" [ref=e174]:
                - listitem [ref=e175]: FastAPI
                - listitem [ref=e176]: Python
                - listitem [ref=e177]: JavaScript
                - listitem [ref=e178]: Tailwind CSS
                - listitem [ref=e179]: yfinance
                - listitem [ref=e180]: TA-Lib
              - link "View details ↗" [ref=e182] [cursor=pointer]:
                - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e183]:
        - generic [ref=e184]:
          - paragraph [ref=e185]: 02 / About
          - heading "From applications, to my own servers." [level=2] [ref=e186]
          - paragraph [ref=e187]: IKBAR RABBANI PURWANTOFull-Stack Developer · Linux & Self-Hosting
        - generic [ref=e188]:
          - paragraph [ref=e189]: I’m Ikbar Rabbani Purwanto, an IT Programmer and an undergraduate student in Information Management. I build web applications for VPS service management, online exams, and ticketing.
          - generic [ref=e190]:
            - generic [ref=e191]: ↳ Linux & Self-Hosting
            - paragraph [ref=e192]: I manage a personal Proxmox lab for deployment, VM network separation, and remote access. My main interests are backend development, automation, and running applications on Linux servers.
          - heading "My working toolkit" [level=3] [ref=e193]
          - generic [ref=e194]:
            - generic [ref=e195]:
              - generic [ref=e196]: "01"
              - heading "Backend & Database" [level=3] [ref=e197]
              - paragraph [ref=e198]: Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL
              - generic [ref=e199]:
                - generic [ref=e200]: Applied in
                - link "VPS Manager ↗" [ref=e201] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e202] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Helpdesk Ticketing ↗" [ref=e203] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e204] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
            - generic [ref=e205]:
              - generic [ref=e206]: "02"
              - heading "Frontend" [level=3] [ref=e207]
              - paragraph [ref=e208]: JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS
              - generic [ref=e209]:
                - generic [ref=e210]: Applied in
                - link "VPS Manager ↗" [ref=e211] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e212] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Chat APP ↗" [ref=e213] [cursor=pointer]:
                  - /url: "#/projects/chat-app"
              - paragraph [ref=e214]: Astro in VPS Manager; React in the archived Chat APP. Next.js is part of my toolkit; no featured project using it is listed yet.
            - generic [ref=e215]:
              - generic [ref=e216]: "03"
              - heading "Infrastructure" [level=3] [ref=e217]
              - paragraph [ref=e218]: Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale
              - generic [ref=e219]:
                - generic [ref=e220]: Applied in
                - link "Proxmox Home Lab ↗" [ref=e221] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
                - link "VPS Manager ↗" [ref=e222] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
            - generic [ref=e223]:
              - generic [ref=e224]: "04"
              - heading "Automation & Integrations" [level=3] [ref=e225]
              - paragraph [ref=e226]: Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi
              - generic [ref=e227]:
                - generic [ref=e228]: Applied in
                - link "VPS Manager ↗" [ref=e229] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "Helpdesk Ticketing ↗" [ref=e230] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e231] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e232]:
        - paragraph [ref=e233]: ↳ Learning notes
        - generic [ref=e234]:
          - link "Basic Javascript Programming (new tab)" [ref=e235] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/MEPJE400WX3V
            - text: Basic Javascript Programming
            - generic [aria-hidden] [ref=e236]: ↗
            - generic [ref=e237]: (new tab)
          - link "Creating a backend app for beginners (new tab)" [ref=e238] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/JLX1L4Y8NX72
            - text: Creating a backend app for beginners
            - generic [aria-hidden] [ref=e239]: ↗
            - generic [ref=e240]: (new tab)
          - link "Basic Python for beginners (new tab)" [ref=e241] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/81P27JWGNZOY
            - text: Basic Python for beginners
            - generic [aria-hidden] [ref=e242]: ↗
            - generic [ref=e243]: (new tab)
          - generic [ref=e244]: Laravel & Nuxt.js
      - generic [ref=e245]:
        - paragraph [ref=e246]: 03 / Contact
        - generic [ref=e247]:
          - heading "Have an idea? Let’s talk it through." [level=2] [ref=e248]
          - generic [ref=e249]:
            - paragraph [ref=e250]: For a question, a collaboration, or just a hello. It starts with one email.
            - link "Write an email" [ref=e251] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
              - text: Write an email
              - generic [aria-hidden] [ref=e252]: ↗
        - generic [ref=e253]:
          - generic [ref=e254]:
            - link "ikbar686@gmail.com" [ref=e255] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
            - button "Copy email" [ref=e256] [cursor=pointer]: Copy email ⧉
            - status [ref=e257]
          - generic [ref=e258]:
            - link "WhatsApp (new tab)" [ref=e259] [cursor=pointer]:
              - /url: https://wa.me/6281413265114
              - text: WhatsApp
              - generic [aria-hidden] [ref=e260]: ↗
              - generic [ref=e261]: (new tab)
            - link "+62 81413265114" [ref=e262] [cursor=pointer]:
              - /url: tel:+6281413265114
        - navigation "Social links" [ref=e263]:
          - link "GitHub (new tab)" [ref=e264] [cursor=pointer]:
            - /url: https://github.com/d3sc
            - text: GitHub
            - generic [aria-hidden] [ref=e265]: ↗
            - generic [ref=e266]: (new tab)
          - link "Instagram (new tab)" [ref=e267] [cursor=pointer]:
            - /url: https://www.instagram.com/ikrabni_09/
            - text: Instagram
            - generic [aria-hidden] [ref=e268]: ↗
            - generic [ref=e269]: (new tab)
          - link "LinkedIn (new tab)" [ref=e270] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ikbar-rabbani-b93096285/
            - text: LinkedIn
            - generic [aria-hidden] [ref=e271]: ↗
            - generic [ref=e272]: (new tab)
          - link "YouTube (new tab)" [ref=e273] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e274]: ↗
            - generic [ref=e275]: (new tab)
  - contentinfo [ref=e276]:
    - generic [ref=e277]: © 2026 Ikbar Rabbani Purwanto
    - link "↑ Home" [ref=e278] [cursor=pointer]:
      - /url: "#/"
```

# Test source

```ts
  1   | import type { Page } from "@playwright/test";
  2   | import { test, expect } from "./fixtures";
  3   | import AxeBuilder from "@axe-core/playwright";
  4   | import { projects, copy, categoryLabels, type Locale } from "../src/data";
  5   | async function start(
  6   |   page: Page,
  7   |   locale: Locale = "id",
  8   |   theme: "dark" | "light" = "dark",
  9   | ) {
  10  |   await page.addInitScript(
  11  |     ({ locale, theme }) => {
  12  |       localStorage.setItem("portfolio-locale", locale);
  13  |       localStorage.setItem("portfolio-theme", theme);
  14  |     },
  15  |     { locale, theme },
  16  |   );
  17  |   await page.goto("/");
  18  |   await expect(page.getByRole("tab").first()).toBeVisible();
  19  | }
  20  | async function noOverflow(page: Page) {
  21  |   expect(
  22  |     await page.evaluate(() =>
  23  |       Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
  24  |     ),
  25  |   ).toBeLessThanOrEqual(page.viewportSize()!.width);
  26  | }
  27  | async function axe(page: Page) {
  28  |   // This portfolio has no frames. The normal runPartial/finishRun pipeline
  29  |   // creates a second renderer, which exhausted this host's memory in the trace.
  30  |   // Guard the assumption so a future embedded frame cannot silently lose coverage.
  31  |   expect(
  32  |     page.frames(),
  33  |     "single-page audit requires a frame-free document",
  34  |   ).toHaveLength(1);
  35  |   const context = page.context();
  36  |   const pageCount = context.pages().length;
  37  |   await test.step(`WCAG audit: ${new URL(page.url()).hash || "home"}`, async () => {
  38  |     const result = await new AxeBuilder({ page })
  39  |       .setLegacyMode(true)
  40  |       .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
  41  |       .analyze();
  42  |     await test.info().attach(`axe-${new URL(page.url()).hash || "home"}`, {
  43  |       body: JSON.stringify(
  44  |         {
  45  |           url: page.url(),
  46  |           mode: "same-page axe.run",
  47  |           frameCount: page.frames().length,
  48  |           passedRules: result.passes.length,
  49  |           violations: result.violations,
  50  |           incomplete: result.incomplete.map((rule) => ({
  51  |             id: rule.id,
  52  |             impact: rule.impact,
  53  |           })),
  54  |         },
  55  |         null,
  56  |         2,
  57  |       ),
  58  |       contentType: "application/json",
  59  |     });
> 60  |     expect(result.violations).toEqual([]);
      |                               ^ Error: expect(received).toEqual(expected) // deep equality
  61  |     expect(
  62  |       context.pages(),
  63  |       "audit must not allocate an auxiliary page",
  64  |     ).toHaveLength(pageCount);
  65  |   });
  66  | }
  67  | async function navigate(page: Page, label: string) {
  68  |   if (page.viewportSize()!.width <= 800)
  69  |     await page.getByRole("button", { name: /^Menu/ }).click();
  70  |   await page
  71  |     .locator("#primary-nav")
  72  |     .getByRole("link", { name: label, exact: true })
  73  |     .click();
  74  | }
  75  | 
  76  | test("hero selection: click, keyboard, wrap, focus, links and no autoplay", async ({
  77  |   page,
  78  | }) => {
  79  |   await start(page);
  80  |   await page.evaluate(() => document.fonts.ready);
  81  |   await noOverflow(page);
  82  |   const tabs = page.getByRole("tab");
  83  |   await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  84  |   await expect(page.getByRole("tabpanel")).toContainText("VPS Manager");
  85  |   if (test.info().project.use.hasTouch) await tabs.nth(1).tap();
  86  |   else await tabs.nth(1).click();
  87  |   await expect(page.getByRole("tabpanel")).toContainText("Proxmox Home Lab");
  88  |   await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
  89  |     "href",
  90  |     "#/projects/proxmox-home-lab",
  91  |   );
  92  |   await page.keyboard.press("ArrowRight");
  93  |   await expect(tabs.nth(2)).toBeFocused();
  94  |   await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  95  |   await page.keyboard.press("ArrowRight");
  96  |   await expect(tabs.first()).toBeFocused();
  97  |   await page.keyboard.press("End");
  98  |   await expect(tabs.nth(2)).toBeFocused();
  99  |   await page.keyboard.press("Home");
  100 |   await expect(tabs.first()).toBeFocused();
  101 |   await page.keyboard.press("ArrowLeft");
  102 |   await expect(tabs.nth(2)).toBeFocused();
  103 |   await page.waitForTimeout(900);
  104 |   await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  105 |   await page.getByRole("tabpanel").getByRole("link").click();
  106 |   await expect(page).toHaveURL(/lms-ujian-online$/);
  107 |   await expect(page.locator("main")).toBeFocused();
  108 |   await expect(page.getByRole("heading", { level: 1 })).toContainText(
  109 |     "LMS Ujian Online",
  110 |   );
  111 |   await noOverflow(page);
  112 | });
  113 | for (const locale of ["id", "en"] as const)
  114 |   for (const theme of ["dark", "light"] as const) {
  115 |     test(`${locale}/${theme}: home, archive, current details, accessibility`, async ({
  116 |       page,
  117 |     }) => {
  118 |       const t = copy[locale];
  119 |       await start(page, locale, theme);
  120 |       await expect(page.locator("html")).toHaveAttribute("lang", locale);
  121 |       await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
  122 |       await axe(page);
  123 |       await noOverflow(page);
  124 |       await navigate(page, t.work);
  125 |       await expect(page).toHaveURL(/#\/projects$/);
  126 |       await expect(page.locator(".project-card")).toHaveCount(11);
  127 |       await expect(page.locator("#primary-nav a[aria-current]")).toContainText(
  128 |         t.work,
  129 |       );
  130 |       await page
  131 |         .getByRole("button", { name: categoryLabels[locale].Game, exact: true })
  132 |         .click();
  133 |       await expect(page.locator(".project-card")).toHaveCount(1);
  134 |       await expect(page.locator(".project-card")).toContainText("Samurai Game");
  135 |       await page.getByRole("button", { name: t.all, exact: true }).click();
  136 |       await axe(page);
  137 |       await noOverflow(page);
  138 |       for (const p of projects[locale]) {
  139 |         await page
  140 |           .locator(`.project-visual[href="#/projects/${p.slug}"]`)
  141 |           .click();
  142 |         await expect(page.getByRole("heading", { level: 1 })).toContainText(
  143 |           p.title,
  144 |         );
  145 |         await expect(page.locator(".detail-body")).toContainText(
  146 |           p.contribution,
  147 |         );
  148 |         const external = page.locator('.detail-body a[target="_blank"]');
  149 |         if (p.externalUrl)
  150 |           await expect(external).toHaveAttribute("href", p.externalUrl);
  151 |         else await expect(external).toHaveCount(0);
  152 |         if (p.image) {
  153 |           const img = page.locator(".gallery-enlarge img");
  154 |           await expect(img).toHaveAttribute("src", p.image);
  155 |           await expect
  156 |             .poll(() =>
  157 |               img.evaluate(
  158 |                 (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
  159 |               ),
  160 |             )
```