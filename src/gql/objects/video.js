const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const VideoType = requireObject('videoType');
  
  return new graphql.GraphQLObjectType({
    name: 'Video',
    fields: {
      id: { type: graphql.GraphQLID },
      iso_639_1: { type: graphql.GraphQLString },
      iso_3166_1: { type: graphql.GraphQLString },
      key: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
      site: { type: graphql.GraphQLString },
      type: { type: VideoType },
      size: { type: graphql.GraphQLInt }
    }
  });
};