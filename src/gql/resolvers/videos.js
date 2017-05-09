module.exports = (api, imageLanguage, language) => { 
  return (source, args, context, info) => {
    if (source.videos && source.videos.results) {
      return source.videos.results;
    }
    return [];
  };
};