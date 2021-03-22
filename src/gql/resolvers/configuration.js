module.exports = (api, apiOptions) => {
  return (source, args, context, info) => {
    return api.configurationAsync(apiOptions);
  };
};
