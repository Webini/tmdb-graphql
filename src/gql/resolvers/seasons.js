const SeasonResolverFactory = require('./season.js');

module.exports = (api, apiOptions) => {
  const resolver = SeasonResolverFactory(api, apiOptions);

  return (source, args, context, info) => {
    if (!source.seasons || source.seasons.length <= 0) {
      return [];
    }

    return Promise.all(source.seasons.map((season) => {
      return resolver(source, {
        tv_id: source.id,
        season_number: season.season_number
      }, context, info);
    }));
  };
};
