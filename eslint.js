module.exports = {
  root: true,
  extends: ["eslint-config-codely/typescript"],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["**/*.ts"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
