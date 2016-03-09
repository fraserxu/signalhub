var server = require('signalhub/server')({
  maxBroadcasts: 0
})

server.on('subscribe', function (channel) {
  console.log('subscribe: %s', channel)
})

server.on('publish', function (channel, message) {
  console.log('broadcast: %s (%d)', channel, message.length)
})

server.listen(process.env.PORT || 8081, function () {
  console.log('signalhub listening on port %d', server.address().port)
})
