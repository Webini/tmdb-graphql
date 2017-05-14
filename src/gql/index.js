const schema = require('./schema.js')();
const graphql = require('graphql');
const tvGql = require('./query/tv.js');
const movieGql = require('./query/movie.js');
const seasonGql = require('./query/season.js');
const searchTvGql = require('./query/searchTv.js');
const searchMovieGql = require('./query/searchMovie.js');

function processResult(promise, key) {
  return promise.then((result) => {
    if (result.data.errors) {
      throw new Error(result.data.errors);
    }

    return result.data[key];
  });
}

module.exports = {
  /**
   * @param {Integer} id Movie ID
   * @return {Object}
   */
  getMovie: (id) => {
    return processResult(
      graphql.graphql(schema, movieGql, null, null, { movie_id: id }),
      'movie'
    );
  },
  /**
   * @param {Integer} id Tv id
   * @return {Object}
   */
  getTv: (id) => {
    return processResult(
      graphql.graphql(schema, tvGql, null, null, { tv_id: id }),
      'tv'
    );
  },
  /**
   * @param {Integer} tvId Tv id
   * @param {Integer} seasonNumber Season number
   * @return {Object} 
   */
  getSeason: (tvId, seasonNumber) => {
    return processResult(
      graphql.graphql(schema, seasonGql, null, null, { 
        tv_id: tvId,
        season_number: seasonNumber
      }),
      'season'
    );
  },
  /**
   * @param {String} query search query
   * @return {Object}
   */
  searchTv: (query) => {
    return processResult(
      graphql.graphql(schema, searchTvGql, null, null, { query }),
      'searchTv'
    );
  },
  /**
   * @param {String} query search query
   * @return {Object}
   */
  searchMovie: (query) => {
    return processResult(
      graphql.graphql(schema, searchMovieGql, null, null, { query }),
      'searchMovie'
    );
  }
};