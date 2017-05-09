const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'MovieResult',
    fields: {
      poster_path: { type: graphql.GraphQLString },
      adult: { type: graphql.GraphQLBoolean },
      overview: { type: graphql.GraphQLString },
      release_date: { type: graphql.GraphQLString },
      genre_ids: { type: new graphql.GraphQLList(graphql.GraphQLInt) },
      id: { type: graphql.GraphQLID },
      original_title: { type: graphql.GraphQLString },
      original_language: { type: graphql.GraphQLString },
      title: { type: graphql.GraphQLString },
      backdrop_path: { type: graphql.GraphQLString },
      popularity: { type: graphql.GraphQLFloat },
      vote_count: { type: graphql.GraphQLInt },
      video: { type: graphql.GraphQLBoolean },
      vote_average: { type: graphql.GraphQLFloat }
    }
  });
};