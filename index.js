var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'jshSDd5N5Q1ZPb4l511vSwtL0 ',
  consumer_secret:      'uD6Z5N81O6KFvYOMG81tnHIXAwaFLT4m7gtzeSlbIxz3Av7xNj',
  access_token:         '22637016-woGjjUDoT29ulE69mn1EkDmg9oCdDvYn7Ux9EZlHU',
  access_token_secret:  'FVCQcITlcVxVSkFYGE00wlngHUehzpUI2RaEzHOXNysq5',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})