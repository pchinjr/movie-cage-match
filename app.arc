@app
init

@http
get /

get /movies
get /movies/:movieId
post /movies/:movieId
post /votes/:movieId/upvote
post /votes/:movieId/downvote

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
