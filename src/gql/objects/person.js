const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'Person',
    fields: {
      id: { type: graphql.GraphQLID },
      name: { type: graphql.GraphQLString },
      profile_path: { type: graphql.GraphQLString }
    },
  });
};