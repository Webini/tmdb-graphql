const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Cast = requireObject('cast');
  const Crew = requireObject('crew');
  
  return new graphql.GraphQLObjectType({
    name: 'Credits',
    fields: {
      id: { type: graphql.GraphQLID },
      cast: { type: new graphql.GraphQLList(Cast) },
      crew: { type: new graphql.GraphQLList(Crew) }
    }
  });
};