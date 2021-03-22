const createApi = require('./api/tmdb');
const createResolvers = require('./gql/resolvers');
const createObjects = require('./gql/objects');
const createSchema = require('./gql/createSchema');
const createQueries = require('./gql/createQueries');

const api = createApi();
const resolvers = createResolvers(api);
const objects = createObjects(resolvers);

const schema = createSchema(resolvers, objects);
const queries = createQueries(schema);

module.exports = queries;
