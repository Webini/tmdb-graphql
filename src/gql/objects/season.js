const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Images = requireObject('images');
  const Video = requireObject('video');
  const Credits = requireObject('credits');
  const Episode = requireObject('episode');
  
  return new graphql.GraphQLObjectType({
    name: 'Season',
    fields: {
      air_date: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
      overview: { type: graphql.GraphQLString },
      id: { type: graphql.GraphQLID },
      poster_path: { type: graphql.GraphQLString },
      season_number: { type: graphql.GraphQLInt },
      credits: { type: Credits },
      images: { type: Images },
      videos: {
        type: new graphql.GraphQLList(Video),
        resolve: resolvers.videos
      },
      episodes: { type: new graphql.GraphQLList(Episode) }
    }
  });
};