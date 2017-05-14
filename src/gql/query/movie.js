const fragments = require('./fragments.js');

module.exports = `
query MovieQuery($movie_id: ID!) {
  movie(id: $movie_id) { 
    ...movieContent
  } 
}
${fragments.person}
${fragments.crew}
${fragments.cast}
${fragments.image}
${fragments.video}
${fragments.keyword}
${fragments.genre}
${fragments.productionCompany}
${fragments.language}
${fragments.country}
${fragments.movieContent}`;