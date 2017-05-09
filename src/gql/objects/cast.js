const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Image = requireObject('image');
  
  return new graphql.GraphQLObjectType({
    name: 'Cast',
    fields: {
      cast_id: { type: graphql.GraphQLID },
      character: { type: graphql.GraphQLString },
      credit_id: { type: graphql.GraphQLID },
      id: { type: graphql.GraphQLID },
      name: { type: graphql.GraphQLString },
      order: { type: graphql.GraphQLInt },
      profile_path: { type: graphql.GraphQLString }
    }
  });
};