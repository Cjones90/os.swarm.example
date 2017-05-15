'use strict';

const fs = require("fs");
const os = require("os");
const ifaces = os.networkInterfaces();

let serverHitCount = 0;

const routes = function (req, res) {

    const respond = (response) => {
        response = response || "";
        res.writeHead(200, {'Access-Control-Allow-Origin' : '*'} );
        // Intoduces load/latency
        setTimeout(() => { res.end(JSON.stringify(response)); }, 2000)
    }
    //Convert post data to string
    let input = '';
    req.on('data', (buffer) => {
        input += buffer.toString();
    })

    req.on('end', () => {
        let parsed = input ? JSON.parse(input) : "";
        if(req.url.indexOf('/api/get/') > -1) {
            switch(req.url) {
                case "/api/get/hit": respondToHit(respond);
                break;
                default: respond();
            }
        }
        else {
            switch(req.url) {
                case "/": respond();
                break;
                default: respond();
            }
        }
    })
}

function respondToHit(respond) {
    // http://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
    let address = ifaces["eth0"][0].address
    respond(`Host: ${os.hostname()} ---IP of Docker container: ${address} ---Version: 0.2.0 ---Count: ${++serverHitCount}`)
}

module.exports = routes;
