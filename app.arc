@app
init

@http
get /

get /movies
get /movies/:movieId
post /movies/:movieId
post /upvote
post /downvote

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
