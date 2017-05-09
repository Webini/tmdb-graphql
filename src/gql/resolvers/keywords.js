const tmdb = require('../../api/tmdb.js'); 

module.exports = (api, imageLanguage, language) => { 
  return (source, args, context, info) => {
    if (source.keywords) {
      return source.keywords.results || source.keywords.keywords || [];
    }
    return [];
  };
};