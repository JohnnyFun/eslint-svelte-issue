module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  globals: {
    window: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/ignore-warnings': warning => {
      if (warning.code === 'no-unused-vars' && /'\$[^']+' is assigned a value but never used./.test(warning.message)) return true
      return false
    },
  },
  rules: {
    // rules for both client and cypress
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-extra-semi': 'warn',
    'no-useless-escape': 'warn',
    'semi-spacing': 'warn',
    'prefer-const': 'warn',
    eqeqeq: 'off',
    'no-case-declarations': 'off',
    'no-extra-parens': 'off', // would be nice to turn this on and also make svelte files not put parens around lambda assignments like: () => (loading = true)
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    semi: 'off',
  },
}