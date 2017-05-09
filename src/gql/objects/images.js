const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Image = requireObject('image');

  return new graphql.GraphQLObjectType({
    name: 'Images',
    fields: {
      id: { type: graphql.GraphQLID },
      backdrops: { type: new graphql.GraphQLList(Image) },
      posters: { type: new graphql.GraphQLList(Image) }
    }
  });
};