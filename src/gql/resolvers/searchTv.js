module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    return api
      .searchTvAsync({
        ...apiOptions,
        query: args.query,
      })
      .then((data) => {
        return data.results || data;
      })
    ;
  };
};
