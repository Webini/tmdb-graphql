const tmdb = require('../../src/gql/index.js');
const graphql = require('graphql');
const assert = require('assert');

describe('GraphQL', function(){
  this.timeout(120000);
  it('should retreive Movie', () => {
    return tmdb.getMovie(283995)
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const movie = result.data.movie;
        assert.ok(movie.images, 'Cannot found images');
        assert.ok(movie.videos, 'Cannot found videos');
        assert.ok(movie.credits, 'Cannot found credits');
        assert.ok(movie.keywords, 'Cannot found keywords');
      })
    ;
  });

  it('should retreive Tv', function(){
    return tmdb.getTv(13916)
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const tv = result.data.tv;
        // require('fs').writeFileSync('./tv.json', JSON.stringify(tv));
        // console.log(require('util').inspect(tv, { depth: null }));
        assert.ok(tv.images, 'Cannot found images');
        assert.ok(tv.videos, 'Cannot found videos');
        assert.ok(tv.credits, 'Cannot found credits');
        assert.ok(tv.keywords, 'Cannot found keywords');
        assert.ok(tv.external_ids, 'Cannot found external ids');
        assert.ok(tv.seasons, 'Cannot found seasons');
      })
    ;
  });

  it('should retreive Season', function(){
    return tmdb.getSeason(13916, 1)
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const season = result.data.season;
        assert.ok(season.images, 'Cannot found images');
        assert.ok(season.videos, 'Cannot found videos');
        assert.ok(season.credits, 'Cannot found credits');
        assert.ok(season.episodes, 'Cannot found episodes');
      })
    ;
  });

  it('should search TV', function(){
    return tmdb.searchTv('BoJack')
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const results = result.data.searchTv;
        assert.ok(results.length > 0, 'Cannot found results');
      })
    ;
  });

  it('should search Movie', function(){
    return tmdb.searchMovie('Arme fatale')
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const results = result.data.searchMovie;
        assert.ok(results.length > 0, 'Cannot found results');
      })
    ;
  });
});