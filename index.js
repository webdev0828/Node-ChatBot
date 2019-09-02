// var RtmClient = require('@slack/client').RtmClient;
// var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

// var rtm = new RtmClient('xoxb-*************************************');
// rtm.start();

// // rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
// //     for (const c of rtmStartData.channels) {
// //         if (c.is_member && c.name ==='jamiestestchannel') { channel = c.id }
// //     }
// //     console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
// //   });

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port =  process.env.PORT || 1336;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.status(200).send('hello world');
});

app.listen(port, function(){
    console.log('Listening on port 1336');
});

app.post('/hello', function(req, res, next){
    var userName = req.body.user_name;
    var botPayload = {
        text: "Hello" + userName + ", Welcome to the our Slack Site! Have fun!!!"
    };

    if(userName !== 'slackbot'){
        return res.status(200).json(botPayload);
    } else {
        return  res.status(200).end();
    }
})