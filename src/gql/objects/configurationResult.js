const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const ConfigurationImages = requireObject('configurationImages');

  return new graphql.GraphQLObjectType({
    name: 'ConfigurationResult',
    fields: {
      images: { type: ConfigurationImages },
      change_keys: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    },
  });
};
