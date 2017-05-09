const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Image = requireObject('image');
  
  return new graphql.GraphQLObjectType({
    name: 'Crew',
    fields: {
      credit_id: { type: graphql.GraphQLID },
      department: { type: graphql.GraphQLString },
      id: { type: graphql.GraphQLID },
      job: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
      profile_path: { type: graphql.GraphQLString }
    }
  });
};