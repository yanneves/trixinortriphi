var Socks5ClientHttpAgent = require('socks5-http-client/lib/Agent'),
    request = require('request');

request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
    url: 'http://trixinortriphi.com/wp-admin/admin-ajax.php',
    body: 'winner=B&postid=9&action=dilemma_vote'//,
    // agent: new Socks5ClientHttpAgent({
    //     socksHost: 'localhost', // Defaults to 'localhost'.
    //     socksPort: 9050 // Defaults to 1080.
    // })
}, function(err, res, body) {
    try {
        var data = JSON.parse(body || '{}');
        console.log("Mission winB" + " Count " + (data.winB || 'empty') + "!");
    } catch(e) {
        console.log('Error!');
        console.dir(err);
    }
});