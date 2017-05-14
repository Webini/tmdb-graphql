const schema = require('./schema.js')();
const graphql = require('graphql');
const tvGql = require('./query/tv.js');
const movieGql = require('./query/movie.js');
const seasonGql = require('./query/season.js');
const searchTvGql = require('./query/searchTv.js');
const searchMovieGql = require('./query/searchMovie.js');

module.exports = {
  /**
   * @param {Integer} id Movie ID
   * @return {Object}
   */
  getMovie: (id) => {
    return graphql.graphql(schema, movieGql, null, null, { movie_id: id });
  },
  /**
   * @param {Integer} id Tv id
   * @return {Object}
   */
  getTv: (id) => {
    return graphql.graphql(schema, tvGql, null, null, { tv_id: id });
  },
  /**
   * @param {Integer} tvId Tv id
   * @param {Integer} seasonNumber Season number
   * @return {Object} 
   */
  getSeason: (tvId, seasonNumber) => {
    return graphql.graphql(schema, seasonGql, null, null, { 
      tv_id: tvId,
      season_number: seasonNumber
    });
  },
  /**
   * @param {String} query search query
   * @return {Object}
   */
  searchTv: (query) => {
    return graphql.graphql(schema, searchTvGql, null, null, { query });
  },
  /**
   * @param {String} query search query
   * @return {Object}
   */
  searchMovie: (query) => {
    return graphql.graphql(schema, searchMovieGql, null, null, { query });
  }
};