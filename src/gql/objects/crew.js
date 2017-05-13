const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Person = requireObject('person');
  
  return new graphql.GraphQLObjectType({
    name: 'Crew',
    fields: {
      department: { type: graphql.GraphQLString },
      id: { type: graphql.GraphQLID },
      job: { type: graphql.GraphQLString },
      person: { type: Person }
    }
  });
};