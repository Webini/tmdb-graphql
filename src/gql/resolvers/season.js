module.exports = (api, imageLanguage, language) => { 
  return (source, args, context, info) => {
    return api
      .tvSeasonInfoAsync({
        id: args.tv_id,
        season_number: args.season_number,
        include_image_language: imageLanguage,
        append_to_response: 'videos,images,credits'
      })
    ;
  };
};