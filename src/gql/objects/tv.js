const graphql = require('graphql');

//todo created_by
module.exports = (resolvers, requireObject) => {
  const Genre = requireObject('genre');
  const Network = requireObject('network');
  const ProductionCompany = requireObject('productionCompany');
  const Season = requireObject('season');
  const ExternalIds = requireObject('externalIds');
  const Images = requireObject('images');
  const Video = requireObject('video');
  const Credits = requireObject('credits');
  const Keyword = requireObject('keyword');
  
  return new graphql.GraphQLObjectType({
    name: 'Tv',
    fields: {
      backdrop_path: { type: graphql.GraphQLString },
      external_ids: { type: ExternalIds },
      episode_run_time: { type: new graphql.GraphQLList(graphql.GraphQLInt) },
      first_air_date: { type: graphql.GraphQLString },
      genres: { type: new graphql.GraphQLList(Genre) },
      homepage: { type: graphql.GraphQLString },
      id: { type: graphql.GraphQLID },
      in_production: { type: graphql.GraphQLBoolean },
      languages: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      last_air_date: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
      networks: { type: new graphql.GraphQLList(Network) },
      number_of_episodes: { type: graphql.GraphQLInt },
      number_of_seasons: { type: graphql.GraphQLInt },
      origin_country: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      original_language: { type: graphql.GraphQLString },
      original_name: { type: graphql.GraphQLString },
      overview: { type: graphql.GraphQLString },
      popularity: { type: graphql.GraphQLFloat },
      poster_path: { type: graphql.GraphQLString },
      production_companies: { type: new graphql.GraphQLList(ProductionCompany) },
      status: { type: graphql.GraphQLString },
      type: { type: graphql.GraphQLString },
      vote_average: { type: graphql.GraphQLFloat },
      vote_count: { type: graphql.GraphQLInt },
      images: { type: Images },
      videos: {
        type: new graphql.GraphQLList(Video),
        resolve: resolvers.videos
      },
      keywords: { 
        type: new graphql.GraphQLList(Keyword),
        resolve: resolvers.keywords
      },
      credits: { type: Credits },
      seasons: { 
        type: new graphql.GraphQLList(Season),
        resolve: resolvers.seasons
      }
    }
  });
};