let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function http (req) {
  let result = await data.get({table: "movies"})

  console.log("initial data: ", result)

  let form = `<h1>Praise Cage</h1>
    <form action="/votes/001/upvote" method=post>
    MOVIE_ID:001
    <input type=hidden name=movieId value=001>
    <button>Upvote</button>
    </form>
    <form action="/votes/001/downvote" method=post>
    MOVIE_ID:001
    <input type=hidden name=movieId value=001>
    <button>Downvote</button>
    </form>

    <form action="/votes/002/upvote" method=post>
    MOVIE_ID:002
    <input type=hidden name=movieId value=002>
    <button>Upvote</button>
    </form>
    <form action="/votes/002/downvote" method=post>
    MOVIE_ID:002
    <input type=hidden name=movieId value=002>
    <button>Downvote</button>
    </form>

    <pre>${JSON.stringify(result)}</pre>
    `

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: form
  }
}