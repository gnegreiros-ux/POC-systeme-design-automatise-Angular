// Créer config/sd.config.js
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    }
  }
};