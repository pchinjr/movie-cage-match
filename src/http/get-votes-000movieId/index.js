// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {

  let movieId = req.pathParameters.movieId

  let data = {
    "movie": {
      id: "001",
      "votes": 10
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({data})
  }
}