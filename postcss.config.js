module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'default' } } : {}),
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['advanced', {
          discardComments: { removeAll: true },
          cssDeclarationSorter: { order: 'smacss' },
        }]
      }
    } : {}),
  }
}
