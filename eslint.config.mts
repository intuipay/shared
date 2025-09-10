import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    rules: {
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': [ 'error', 'always' ],
      'computed-property-spacing': [ 'error', 'always' ],
      'semi': ['error', 'always'],
    },
  },
]);
