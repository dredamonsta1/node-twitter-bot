var twit = require('twit');
var config = require('./config.js');

var T = new twit(config);



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