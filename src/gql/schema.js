const graphql = require('graphql');

module.exports = (resolvers, objects) => {
  if (!resolvers) {
    resolvers = require('./resolvers/index.js')();
  }

  if (!objects) {
    objects = require('./objects/index.js')(resolvers);
  }

  const Movie = objects.movie;
  const MovieResolver = resolvers.movie;
  const Tv = objects.tv;
  const TvResolver = resolvers.tv;
  const Season = objects.season;
  const SeasonResolver  = resolvers.season;
  const TvResult = objects.tvResult;
  const SearchTvResolver = resolvers.searchTv;
  const MovieResult = objects.movieResult;
  const SearchMovieResolver = resolvers.searchMovie;

  return new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'query',
      fields: {
        movie: {
          type: Movie,
          args: {
            id: {
              name: 'id',
              type: new graphql.GraphQLNonNull(graphql.GraphQLID)
            }
          },
          resolve: MovieResolver
        },
        tv: {
          type: Tv,
          args: {
            id: {
              name: 'id',
              type: new graphql.GraphQLNonNull(graphql.GraphQLID)
            }
          },
          resolve: TvResolver
        },
        season: {
          type: Season,
          args: {
            tv_id: {
              name: 'tv_id',
              type: new graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            season_number: {
              name: 'season_number',
              type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
            }
          },
          resolve: SeasonResolver
        },
        searchTv: {
          type: new graphql.GraphQLList(TvResult),
          args: {
            query: {
              name: 'query',
              type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
          },
          resolve: SearchTvResolver
        },
        searchMovie: {
          type: new graphql.GraphQLList(MovieResult),
          args: {
            query: {
              name: 'query',
              type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
          },
          resolve: SearchMovieResolver
        }
      }
    })
  });
};