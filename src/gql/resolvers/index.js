const configuration = require('./configuration');
const keywords = require('./keywords');
const movie = require('./movie');
const personList = require('./personList');
const searchMovie = require('./searchMovie');
const searchTv = require('./searchTv');
const season = require('./season');
const seasons = require('./seasons');
const tv = require('./tv');
const videos = require('./videos');

module.exports = function(api, apiOptions = {}) {
  return {
    configuration: configuration(api, apiOptions),
    keywords: keywords(api, apiOptions),
    movie: movie(api, apiOptions),
    personList: personList(api, apiOptions),
    searchMovie: searchMovie(api, apiOptions),
    searchTv: searchTv(api, apiOptions),
    season: season(api, apiOptions),
    seasons: seasons(api, apiOptions),
    tv: tv(api, apiOptions),
    videos: videos(api, apiOptions),
  };
}
