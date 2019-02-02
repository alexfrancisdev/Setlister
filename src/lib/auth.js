var express = require('express')
var app = express()
const myClientId = '8c1ca626f28a45cca738ceaf595daf23'
const redirectUri = 'http://localhost:8888/callback'

app.get('/login', function(req, res) {
  const scopes = 'user-read-private user-read-email'
  res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + myClientId +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirectUri))
})
