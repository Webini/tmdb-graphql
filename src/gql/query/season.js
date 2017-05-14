const fragments = require('./fragments.js');

module.exports = `
query SeasonQuery($tv_id: ID!, $season_number: Int!) {
  season(tv_id: $tv_id, season_number: $season_number) { 
    ...seasonContent
  } 
}
${fragments.person}
${fragments.image}
${fragments.crew}
${fragments.cast}
${fragments.video}
${fragments.episode}
${fragments.season}`;