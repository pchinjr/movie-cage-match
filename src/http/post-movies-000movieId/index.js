let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(route)

async function route(req) {
  await data.set( {
    table: 'movies',
    key: req.pathParameters.movieId,
    votes: 0
  })
  return {
    statusCode: 301,
    location: '/'
  }
}