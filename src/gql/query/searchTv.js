const fragments = require('./fragments.js');

module.exports = `
query SeasonQuery($query: String!) {
  searchTv(query: $query) {
    id
    poster_path
    popularity
    backdrop_path
    vote_average
    overview
    first_air_date
    origin_country
    genre_ids
    original_language
    vote_count
    name
    original_name
  }
}`;