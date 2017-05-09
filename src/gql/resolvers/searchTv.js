module.exports = (api, imageLanguage, language) => { 
  return (source, args, context, info) => {
    return api
      .searchTvAsync({
        query: args.query,
        include_image_language: imageLanguage,
        language: language
      })
      .then((data) => {
        return data.results || data;
      })
    ;
  };
};