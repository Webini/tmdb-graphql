const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'TvResult',
    fields: {
      id: { type: graphql.GraphQLID },
      poster_path: { type: graphql.GraphQLString },
      popularity: { type: graphql.GraphQLFloat },
      backdrop_path: { type: graphql.GraphQLString },
      vote_average: { type: graphql.GraphQLFloat },
      overview: { type: graphql.GraphQLString },
      first_air_date: { type: graphql.GraphQLString },
      origin_country: { type: new graphql.GraphQLList(graphql.GraphQLString) },
      genre_ids: { type: new graphql.GraphQLList(graphql.GraphQLInt) },
      original_language: { type: graphql.GraphQLString },
      vote_count: { type: graphql.GraphQLInt },
      name: { type: graphql.GraphQLString },
      original_name: { type: graphql.GraphQLString },
    }
  });
};