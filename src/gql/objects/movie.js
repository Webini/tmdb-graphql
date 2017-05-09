const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Genre = requireObject('genre');
  const ProductionCompany = requireObject('productionCompany');
  const Country = requireObject('country');
  const Language = requireObject('language');
  const Images = requireObject('images');
  const Video = requireObject('video');
  const Credits = requireObject('credits');
  const Keyword = requireObject('keyword');
  
  return new graphql.GraphQLObjectType({
    name: 'movie',
    description: 'movie type',
    fields: {
      id: { type: graphql.GraphQLID },
      adult: { type: graphql.GraphQLBoolean },
      backdrop_path: { type: graphql.GraphQLString },
      budget: { type: graphql.GraphQLInt },
      genres: { type: new graphql.GraphQLList(Genre) },
      homepage: { type: graphql.GraphQLString },
      imdb_id: { type: graphql.GraphQLID },
      original_language: { type: graphql.GraphQLString },
      original_title: { type: graphql.GraphQLString },
      overview: { type: graphql.GraphQLString },
      popularity: { type: graphql.GraphQLFloat },
      poster_path: { type: graphql.GraphQLString },
      production_companies: { type: new graphql.GraphQLList(ProductionCompany) },
      production_countries: { type: new graphql.GraphQLList(Country) },
      release_date: { type: graphql.GraphQLString },
      revenue: { type: graphql.GraphQLInt },
      runtime: { type: graphql.GraphQLInt },
      spoken_languages: { type: new graphql.GraphQLList(Language) },
      status: { type: graphql.GraphQLString },
      tagline: { type: graphql.GraphQLString },
      title: { type: graphql.GraphQLString },
      video: { type: graphql.GraphQLBoolean },
      vote_average: { type: graphql.GraphQLFloat },
      vote_count: { type: graphql.GraphQLInt },
      credits: { type: Credits },
      videos: {
        type: new graphql.GraphQLList(Video),
        resolve: resolvers.videos
      },
      images: { type: Images },
      keywords: { 
        type: new graphql.GraphQLList(Keyword),
        resolve: resolvers.keywords
      }
    }
  });
};