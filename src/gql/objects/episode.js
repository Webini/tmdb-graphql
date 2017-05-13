const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  const Cast = requireObject('cast');
  const Crew = requireObject('crew');
  
  return new graphql.GraphQLObjectType({
    name: 'Episode',
    fields: {
      id: { type: graphql.GraphQLID },
      air_date: { type: graphql.GraphQLString },
      episode_number: { type: graphql.GraphQLInt },
      guest_stars: { 
        type: new graphql.GraphQLList(Cast),
        resolve: resolvers.personList
      },
      crew: { 
        type: new graphql.GraphQLList(Crew),
        resolve: resolvers.personList
      },
      name: { type: graphql.GraphQLString },
      overview: { type: graphql.GraphQLString },
      still_path: { type: graphql.GraphQLString },
      vote_average: { type: graphql.GraphQLFloat },
      vote_count: { type: graphql.GraphQLInt }
    }
  });
};