/* Flat ESLint configuration */
import js from "@eslint/js";

export default [
  {
    ignores: [
      "dist/**",
      "coverage/**",
      "**/*.d.ts"
    ]
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: (await import("typescript-eslint")).parser,
      parserOptions: {
        project: false,
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": (await import("typescript-eslint")).plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ...js.configs.recommended
  }
];