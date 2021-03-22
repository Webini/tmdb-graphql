const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'ConfigurationImages',
    fields: {
      base_url: { type: graphql.GraphQLString },
      secure_base_url: { type: graphql.GraphQLString },
      backdrop_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      logo_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      poster_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      profile_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      still_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    },
  });
};
