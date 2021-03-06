const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const devDb = knex(config)

module.exports = {
  findResponse
}

function findResponse (word, testDb) {
  const db = testDb || devDb
  return db('responses')
    .where('responses.word', word)
    .select('responses.response')
}
