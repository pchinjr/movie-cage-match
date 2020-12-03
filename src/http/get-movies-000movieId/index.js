let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = arc.http.async(route)

async function route(req) {
  let result = await data.get({
    table: 'movies'
  })

  return {
    data: result
  }


}