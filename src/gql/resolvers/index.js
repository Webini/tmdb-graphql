const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const tmdb      = require('../../api/tmdb.js'); 

module.exports = function(api, imageLanguage = 'fr,en', language = 'fr-FR') {
  api = api || tmdb();
  
  const resolvers = {};

  fs
    .readdirSync(__dirname)
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const resolverFactory = require(path.join(__dirname, file));
      resolvers[path.basename(file, path.extname(file))] = resolverFactory(api, imageLanguage, language);
    })
  ;
  
  return resolvers;
}
