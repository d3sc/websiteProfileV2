# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.test.ts >> en/dark: home, archive, current details, accessibility
- Location: e2e/portfolio.test.ts:99:5

# Error details

```
Test timeout of 120000ms exceeded.
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
    - article [ref=e14]:
      - link "← Back to projects" [ref=e15] [cursor=pointer]:
        - /url: "#/projects"
      - paragraph [ref=e16]: FIELD NOTE / 07 / Game
      - heading "Samurai Game." [level=1] [ref=e17]
      - paragraph [ref=e18]: "A samurai game: attack, jump, run, and throw shuriken to fight enemies."
      - list "Stack" [ref=e19]:
        - listitem [ref=e20]: Godot 3
      - generic [ref=e22]:
        - generic [ref=e23]: FIELD NOTE / 07
        - generic [aria-hidden] [ref=e24]: "07"
        - paragraph [ref=e25]: Samurai Game
        - generic [ref=e26]: Godot 3
      - paragraph [ref=e27]: Project notes · not a screenshot
      - generic [ref=e28]:
        - generic [ref=e29]:
          - paragraph [ref=e30]: 01 / What I built
          - heading "Samurai Game" [level=2] [ref=e31]
          - paragraph [ref=e32]: Made a samurai-themed game as an early exploration of game development in Godot 3.
        - generic [ref=e33]:
          - paragraph [ref=e34]: 02 / Technology
          - list "Stack" [ref=e35]:
            - listitem [ref=e36]: Godot 3
          - link "YouTube (new tab)" [ref=e37] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e38]: ↗
            - generic [ref=e39]: (new tab)
      - paragraph [ref=e40]: Status summarizes recorded test evidence, not the current health of a deployment. Mock tests do not prove actual message delivery.
  - contentinfo [ref=e41]:
    - generic [ref=e42]: © 2026 Ikbar Rabbani Purwanto
    - generic [ref=e43]: Learn. Evolve. Make.
    - link "↑ Home" [ref=e44] [cursor=pointer]:
      - /url: "#/"
```