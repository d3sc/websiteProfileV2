# Graph Report - websiteProfileV2  (2026-11-26)

## Corpus Check
- 50 files · ~41,037 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 88 file(s) not represented in the graph (top: .zip 59, .network 8, .log 7)
- WARNING: 88 of 394 files seen (22%) have no supported extractor and are missing from this graph entirely. It may look complete while representing only part of the codebase.

## Summary
- 167 nodes · 262 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Development Toolchain
- Portfolio Data and Routing
- Application TypeScript Configuration
- QA Report Automation
- Playwright Browser Tests
- Portfolio UI Components
- Node TypeScript Configuration
- Content Verification Script
- Package Run Scripts
- React Application Entry
- TypeScript Project References

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `App()` - 12 edges
3. `compilerOptions` - 12 edges
4. `routeHref()` - 8 edges
5. `scripts` - 7 edges
6. `vitest` - 7 edges
7. `Home()` - 7 edges
8. `ProjectCard()` - 7 edges
9. `Detail()` - 7 edges
10. `@playwright/test` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `readRoute()`  [EXTRACTED]
  src/App.tsx → src/router.ts
- `App()` --calls--> `routeHref()`  [EXTRACTED]
  src/App.tsx → src/router.ts
- `HeroProjects()` --calls--> `routeHref()`  [EXTRACTED]
  src/App.tsx → src/router.ts
- `Home()` --calls--> `routeHref()`  [EXTRACTED]
  src/App.tsx → src/router.ts
- `ProjectCard()` --calls--> `routeHref()`  [EXTRACTED]
  src/App.tsx → src/router.ts

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "Development Toolchain"
Cohesion: 0.10
Nodes (27): devDependencies, @axe-core/playwright@4.14.0, jsdom@26.1.0, prettier@3.9.10, @testing-library/react@16.3.3, @testing-library/user-event@14.6.8, @types/react@19.3.0, @types/react-dom@19.3.0 (+19 more)

### Community 1 - "Portfolio Data and Routing"
Cohesion: 0.12
Nodes (23): Text, Theme, currentProjects(), entries, Entry, Localized, achievements, allProjects (+15 more)

### Community 2 - "Application TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+10 more)

### Community 4 - "Playwright Browser Tests"
Cohesion: 0.20
Nodes (3): test, @playwright/test@1.64.1, @playwright/test

### Community 5 - "Portfolio UI Components"
Cohesion: 0.27
Nodes (12): App(), Detail(), External(), HeroProjects(), Home(), NotFound(), preference(), ProjectArchive() (+4 more)

### Community 6 - "Node TypeScript Configuration"
Cohesion: 0.14
Nodes (13): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, skipLibCheck (+5 more)

### Community 7 - "Content Verification Script"
Cohesion: 0.17
Nodes (6): mime, names, results, root, server, slugs

### Community 8 - "Package Run Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, preview, test, test:e2e, typecheck

### Community 9 - "React Application Entry"
Cohesion: 0.40
Nodes (5): dependencies, react@19.3.1, react-dom@19.3.1, react, react-dom

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `React Application Entry` to `Development Toolchain`, `Portfolio Data and Routing`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Development Toolchain` be split into smaller, more focused modules?**
  _Cohesion score 0.0967741935483871 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `Package Run Scripts` to `Development Toolchain`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Should `Portfolio Data and Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.12258064516129032 - nodes in this community are weakly interconnected._
- **Why does `@playwright/test` connect `Playwright Browser Tests` to `Development Toolchain`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `Application TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Node TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._

## Code-only scope and provenance

Reused existing deterministic AST extraction: 151 raw nodes and 268 raw edges from 50 code files; no source files were newer than the AST. Documents and images intentionally excluded. No semantic extraction or API calls. This code-only build used 0 input / 0 output LLM tokens. Earlier blocked semantic worker usage is not included in that zero-cost figure.

Graph build produces 167 nodes / 262 edges, including automatically materialized reference endpoints. Graph health warning: 15 raw dangling-endpoint edges, 5 external-reference edges, 1 self-loop, and 6 undirected same-endpoint collapsed edges. The raw AST and code-only-health.json are retained for audit; the graph is usable but not a complete or lossless call graph.

`graphify-out/` was written into the Git working tree. No source files or ignore rules were modified.
