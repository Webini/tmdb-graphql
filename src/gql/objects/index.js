const cast = require('./cast');
const configurationImages = require('./configurationImages');
const configurationResult = require('./configurationResult');
const country = require('./country');
const credits = require('./credits');
const crew = require('./crew');
const episode = require('./episode');
const externalIds = require('./externalIds');
const genre = require('./genre');
const image = require('./image');
const images = require('./images');
const keyword = require('./keyword');
const language = require('./language');
const movie = require('./movie');
const movieResult = require('./movieResult');
const network = require('./network');
const person = require('./person');
const productionCompany = require('./productionCompany');
const season = require('./season');
const tv = require('./tv');
const tvResult = require('./tvResult');
const video = require('./video');
const videoType = require('./videoType');

const factories = {
  cast,
  configurationImages,
  configurationResult,
  country,
  credits,
  crew,
  episode,
  externalIds,
  genre,
  image,
  images,
  keyword,
  language,
  movie,
  movieResult,
  network,
  person,
  productionCompany,
  season,
  tv,
  tvResult,
  video,
  videoType,
}

module.exports = function(resolvers) {
  const objects = {};

  function requireObject(name) {
    if (objects[name] === undefined) {
      objects[name] = factories[name](resolvers, requireObject);
    }

    return objects[name];
  }

  Object.keys(factories).forEach((name) => requireObject(name))

  return objects;
}
