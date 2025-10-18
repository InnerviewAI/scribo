const path = require('node:path')

/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'lf',
  // Provide absolute plugin paths so Prettier can load ESM/CJS consistently
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    // Must come last!
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  // Ensure Tailwind v4 canonical sorting across the project
  tailwindStylesheet: path.resolve(__dirname, './app/globals.css'),
  importOrder: [
    'react', // React
    '^react-.*$', // React-related imports
    '^next', // Next-related imports
    '^next-.*$', // Next-related imports
    '^next/.*$', // Next-related imports
    '^@/', // Internal imports (using @ alias)
    '^.*/lib/.*$', // Lib
    '^.*/utils/.*$', // Utils
    '^.*/types/.*$', // Types
    '^.*/app/.*$', // App
    '^.*/hooks/.*$', // Hooks
    '^.*/contexts/.*$', // Contexts
    '^.*/components/.*$', // Components
    '^[./]', // Other imports
    '.*', // Any uncaught imports
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
}
