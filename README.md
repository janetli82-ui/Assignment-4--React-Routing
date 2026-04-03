# Project plan

The following outlines the step-by-step process for completing this website project:
```
KungFu/
├── 1. Requirement Analysis
│   ├── Review assignment instructions and define topic(Chines KungFu stars)
│   └── Define website pages (Home / Stars / Movies / Gallery / About)
├── 2. Design
│   ├── Plan page structure (Header / Footer / Navigation / mainContainer)
│   └── Create UI mockups (sketches)
├── 3. Development
│   ├── Initialize project (React / Vite)
│   ├── Build components (Header / Navigation / Footer / Layout / MovieCard / StarCard)
│   ├── Develop pages (Home / Stars / Movies / Gallery / About)
│   │   └── Sub pages (StarsList / MoviesList)
│   ├── Build env
│   └── Fetch data (useOmdbFetch / useWikiFetch / dataFile)
├── 4. Testing & Optimization
│   ├── Fix bugs
│   ├── Improve styling
│   └── Ensure responsive design
└── 5. Deployment & Submission
    ├── Build the project and push to Github
    ├── Deploy (Vercel)
    └── Complete README

```
  

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
