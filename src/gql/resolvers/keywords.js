const tmdb = require('../../api/tmdb.js');

module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    if (source.keywords) {
      return source.keywords.results || source.keywords.keywords || [];
    }
    return [];
  };
};
