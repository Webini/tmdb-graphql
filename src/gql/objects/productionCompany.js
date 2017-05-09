const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'ProductionCompany',
    fields: {
      id: { type: graphql.GraphQLID },
      name: { type: graphql.GraphQLString }
    }
  });
};