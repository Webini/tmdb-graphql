module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    return api
      .tvSeasonInfoAsync({
        ...apiOptions,
        id: args.tv_id,
        season_number: args.season_number,
        append_to_response: 'videos,images,credits'
      })
    ;
  };
};
