module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.{ts,js,cjs,mjs}'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'warn',
        'import/order': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};
