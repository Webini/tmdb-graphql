module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    if (source.videos && source.videos.results) {
      return source.videos.results;
    }
    return [];
  };
};
