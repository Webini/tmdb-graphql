const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLEnumType({
    name: 'VideoType',
    values: {
      TRAILER: { value: 'Trailer' },
      TEASER: { value: 'Teaser' },
      CLIP: { value: 'Clip' },
      FEATURETTE: { value: 'Featurette' },
      OPENING_CREDITS: { value: 'Opening Credits' }
    }
  });
};