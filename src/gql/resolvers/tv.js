module.exports = (api, imageLanguage, language) => { 
  return (source, args, context, info) => {
    return api
      .tvInfoAsync({
        id: args.id,
        include_image_language: imageLanguage,
        append_to_response: 'videos,images,credits,keywords,external_ids'
      })
    ;
  };
};