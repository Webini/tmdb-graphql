const schema = require('../../src/gql/schema.js')();
const graphql = require('graphql');
const assert = require('assert');

const genreFragment = `
fragment genre on Genre {
  id
  name
}`;

const productionCompanyFragment = `
fragment productionCompany on ProductionCompany {
  id
  name
}`;

const languageFragment = `
fragment language on Language {
  iso_639_1
  name
}`;

const countryFragment = `
fragment country on Country {
  iso_3166_1
  name
}`;

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

const networkFragment = `
fragment network on Network {
  id
  name
}`;

const seasonFragment = `
fragment season on Season {
  air_date
  name
  overview
  id
  poster_path
  season_number
  credits {
    cast { ...cast }
    crew { ...crew } 
  },
  images { 
    backdrops { ...image }, 
    posters { ...image }
  },
  videos { ...video }
  episodes { ...episode }
}
`;

const movieGql = `
{ 
  movie(id: 283995) { 
    id
    adult
    backdrop_path
    budget
    genres { ...genre }
    homepage
    imdb_id
    original_language
    original_title
    overview
    popularity
    poster_path
    production_companies { ...productionCompany }
    production_countries { ...country }
    release_date
    revenue
    runtime
    spoken_languages { ...language }
    status
    tagline
    title
    video
    vote_average
    vote_count
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
${genreFragment}
${productionCompanyFragment}
${languageFragment}
${countryFragment}
`;

const tvGql = `
{ 
  tv(id: 13916) { 
    backdrop_path
    episode_run_time
    first_air_date
    genres { ...genre }
    homepage
    id
    in_production
    languages
    last_air_date
    name
    networks { ...network }
    number_of_episodes
    number_of_seasons
    origin_country
    original_language
    original_name
    overview
    popularity
    poster_path
    production_companies { ...productionCompany }
    status
    type
    vote_average
    vote_count
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
    seasons { ...season }
  } 
}
${imageFragment}
${crewFragment}
${castFragment}
${videoFragment}
${keywordFragment}
${externalIdsFragment}
${networkFragment}
${productionCompanyFragment}
${genreFragment}
${seasonFragment}
${episodeFragment}
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

  it.only('should retreive Tv', function(){
    return graphql.graphql(schema, tvGql)
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