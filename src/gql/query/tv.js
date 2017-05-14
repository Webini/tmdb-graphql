const fragments = require('./fragments.js');

module.exports = `
query TvQuery($tv_id: ID!) {
  tv(id: $tv_id) { 
    ...tvContent 
  }
}
${fragments.person}
${fragments.image}
${fragments.crew}
${fragments.cast}
${fragments.video}
${fragments.keyword}
${fragments.externalIds}
${fragments.network}
${fragments.productionCompany}
${fragments.genre}
${fragments.season}
${fragments.episode}
${fragments.tvContent}`;