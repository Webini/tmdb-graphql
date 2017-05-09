const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Image = requireObject('image');
  
  return new graphql.GraphQLObjectType({
    name: 'ExternalIds',
    fields: {
      imdb_id: { type: graphql.GraphQLString },
      freebase_mid: { type: graphql.GraphQLString },
      freebase_id: { type: graphql.GraphQLString },
      tvrage_id: { type: graphql.GraphQLID },
      id: { type: graphql.GraphQLString }
    }
  });
};