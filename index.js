var twit = require('twit');
var config = require('./config.js');

var T = new twit(config);

// var T = new Twit({
//   consumer_key:         ' ',
//   consumer_secret:      '',
//   access_token:         '',
//   access_token_secret:  '',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })

console.log('**********bot my baby one more time lol********')

// var retweet = function() {
//     var params = {
//         q: '#hiphop, #bestrapper, #Goat, #topfive, #cultcure, #clutcher, #Kicks, #kotd',
//         result_type: 'recent',
//         lang: 'en'
//     }
// }

var tweet = {
    status: '#hiphop, #bestrapper, #Goat, #topfive, #cultcure, #clutcher, #Kicks, #kotd'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(er, data, response) {
    if(err) {
        console.log("noooooooooooœ!");
    } else {
        console.log(data);
    }
    
}