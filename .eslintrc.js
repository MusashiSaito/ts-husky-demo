module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist"],
  extends: [
    "prettier"
  ],
  rules: {
    "no-console": "off",
    "camelcase":"error",
    "semi":["error", "always"],
    "prefer-const": "error", // use const
    "no-var": "error", // don't use var
    "max-depth": ["error", 2], // nest level
    "eqeqeq": "error", // 厳密等価演算子の使用を強制
    "no-unused-expressions": "error", // 未使用の式を禁止
    "indent": ["error", 2], // インデントはスペース2つ
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      "files": [".eslintrc.js"], // この設定を適用したいファイルパターン
      "rules": {
        "indent": "off"
      }
    }
  ]
};