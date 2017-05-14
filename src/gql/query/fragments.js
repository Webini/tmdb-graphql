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
  id
  character
  order
  person { ...person }
}`;

const crewFragment = ` 
fragment crew on Crew {
  id
  department
  job
  person { ...person }
}`;

const imageFragment = `
fragment image on Image {
  aspect_ratio
  file_path
  height
  iso_639_1
  vote_average
  vote_count
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
  id
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

const personFragment = `
fragment person on Person {
  id
  name
  profile_path
}`;

const seasonFragment = `
fragment seasonContent on Season {
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
    backdrops { ...image }
    posters { ...image }
  },
  videos { ...video }
  episodes { ...episode }
}`;

const tvFragment = `
fragment tvContent on Tv {
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
  videos { ...video }
  credits {
    cast { ...cast }
    crew { ...crew } 
  },
  images { 
    backdrops { ...image }
    posters { ...image }
  },
  keywords { ...keyword }
  external_ids { ...extIds }
  seasons { ...seasonContent }
}`;

const movieContentFragment = `
fragment movieContent on Movie {
  credits {
    cast { ...cast }
    crew { ...crew } 
  }
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
  videos { ...video }
  images { 
    backdrops { ...image },
    posters { ...image }
  },
  keywords { ...keyword }
}`;

module.exports = {
  season: seasonFragment,
  person: personFragment,
  network: networkFragment,
  episode: episodeFragment,
  externalIds: externalIdsFragment,
  keyword: keywordFragment,
  video: videoFragment,
  image: imageFragment,
  crew: crewFragment,
  cast: castFragment,
  country: countryFragment,
  language: languageFragment,
  productionCompany: productionCompanyFragment,
  genre: genreFragment,
  tvContent: tvFragment,
  movieContent: movieContentFragment
};