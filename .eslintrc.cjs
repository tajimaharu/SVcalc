module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-restricted-syntax": ["error", "TSEnumDeclaration"],
    // 以下react-use用設定
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useAsync|useAsyncFn|useAsyncRetry)",
      },
    ],
  },
};
