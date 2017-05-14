const fragments = require('./fragments.js');

module.exports = `
query SeasonQuery($query: String!) {
  searchMovie(query: $query) {
    poster_path
    adult
    overview
    release_date
    genre_ids
    id
    original_title
    original_language
    title
    backdrop_path
    popularity
    vote_count
    video
    vote_average
  }
}`;