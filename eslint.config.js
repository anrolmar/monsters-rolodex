import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tselintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
      promisePlugin.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tselintPlugin.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tselintPlugin,
    },
    settings: {
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...eslintConfigPrettier.rules,

      curly: 'error',

      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      'import/no-named-as-default': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-in modules (fs, path, etc.)
            'external', // Packages from node_modules (e.g., vue, lodash)
            'internal', // Aliased imports (custom utilities, config files)
            ['parent', 'sibling'], // Parent and sibling imports (relative imports like ../ and ./)
            'index', // Index files (./index or ../index)
            'object', // Object imports (e.g., for destructuring imports)
            'type', // Type imports (for TypeScript types only)
            'unknown', // Other unknown imports
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/prefer-default-export': 'off',

      'max-len': ['warn', { code: 100, ignoreComments: true, ignoreUrls: true }],
      'no-console': 'off',
      'no-debugger': 'off',
      'no-shadow': 'off',
      'no-warning-comments': [
        'warn',
        {
          terms: ['todo', 'fixme'],
        },
      ],
      'no-use-before-define': 'off',

      'require-atomic-updates': 'off',

      'prettier/prettier': ['error', { endOfLine: 'auto' }],

      'promise/always-return': 'off',
      'promise/catch-or-return': ['error', { allowFinally: true, terminationMethod: ['catch', 'then'] }],
      'promise/no-callback-in-promise': 'off',
      'promise/no-nesting': 'off',
      'promise/no-promise-in-callback': 'off',

      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { caughtErrorsIgnorePattern: '^error' }],
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
    },
  },
);
