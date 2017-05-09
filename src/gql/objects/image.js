const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'Image',
    fields: {
      aspect_ratio: { type: graphql.GraphQLFloat },
      file_path: { type: graphql.GraphQLString },
      height: { type: graphql.GraphQLInt },
      iso_639_1: { type: graphql.GraphQLString },
      vote_average: { type: graphql.GraphQLFloat },
      vote_count: { type: graphql.GraphQLInt },
      width: { type: graphql.GraphQLInt }
    }
  });
};