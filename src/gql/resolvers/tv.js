module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    return api
      .tvInfoAsync({
        ...apiOptions,
        id: args.id,
        append_to_response: 'videos,images,credits,keywords,external_ids'
      })
    ;
  };
};
