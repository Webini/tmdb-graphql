const schema = require('../../src/gql/schema.js')();
const graphql = require('graphql');
const assert = require('assert');

const castFragment = `
 fragment cast on Cast {
  cast_id
  character
  credit_id
  id
  name
  order
  profile_path
}`;

const crewFragment = ` 
fragment crew on Crew {
  credit_id
  department
  id
  job
  name
  profile_path
}`;

const imageFragment = `
fragment image on Image {
  aspect_ratio,
  file_path,
  height,
  iso_639_1,
  vote_average,
  vote_count,
  width
}`;

const videoFragment = ` 
fragment video on Video {
  id
  iso_639_1
  iso_3166_1
  key
  name
  site
  type
  size
}`;

const keywordFragment = `
fragment keyword on Keyword {
  id,
  name 
}`;

const externalIdsFragment = `
fragment extIds on ExternalIds {
  imdb_id
  freebase_mid
  freebase_id
  tvrage_id
  id
}`;

const episodeFragment = `
fragment episode on Episode {
  id
  air_date
  episode_number
  guest_stars { ...cast }
  crew { ...crew }
  name
  overview
  still_path
  vote_average
  vote_count
}`;

const movieGql = `
{ 
  movie(id: 283995) { 
    id, 
    title, 
    videos { ...video },
    credits {
      cast { ...cast }
      crew { ...crew } 
    },
    images { 
      backdrops { ...image }, 
      posters { ...image }
    },
    keywords { ...keyword }
  } 
}
${imageFragment}
${crewFragment}
${castFragment}
${videoFragment}
${keywordFragment}
`;

const tvGql = `
{ 
  tv(id: 13916) { 
    id, 
    name, 
    videos { ...video },
    credits {
      cast { ...cast }
      crew { ...crew } 
    },
    images { 
      backdrops { ...image }, 
      posters { ...image }
    },
    keywords { ...keyword },
    external_ids { ...extIds },
    seasons {
      name
    }
  } 
}
${imageFragment}
${crewFragment}
${castFragment}
${videoFragment}
${keywordFragment}
${externalIdsFragment}
`;

const seasonGql = `
{ 
  season(tv_id: 13916, season_number: 1) { 
    name, 
    videos { ...video },
    credits {
      cast { ...cast }
      crew { ...crew } 
    },
    images { 
      backdrops { ...image }, 
      posters { ...image }
    },
    episodes { ...episode }
  } 
}
${imageFragment}
${crewFragment}
${castFragment}
${videoFragment}
${episodeFragment}
`;

const searchTvGql = `
{
  searchTv(query: "BoJack") {
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
}
`;

const searchMovieGql = `
{
  searchMovie(query: "Arme fatale") {
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

describe('GraphQL', function(){
  this.timeout(120000);
  it('should retreive Movie', () => {
    return graphql.graphql(schema, movieGql)
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
    return graphql.graphql(schema, tvGql)
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors);
        }
        const tv = result.data.tv;
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
    return graphql.graphql(schema, seasonGql)
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
    this.timeout(60000);
    return graphql.graphql(schema, searchTvGql)
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
    return graphql.graphql(schema, searchMovieGql)
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