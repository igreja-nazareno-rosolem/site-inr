/// <reference types="vite/client" />

// TS 6.0 enables `noUncheckedSideEffectImports` by default, which requires a
// declaration for bare side-effect imports like `import "./index.css"` in main.tsx.
declare module "*.css";
