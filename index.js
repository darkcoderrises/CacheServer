var express = require('express');
var apicache = require('apicache');
var proxy = require('http-proxy-middleware');

let app = express()
apicache.options({ debug: true  });
let cache = apicache.middleware

app.use('/*', cache());
app.use('/*', proxy({target: 'http://api.wunderground.com/api/<api-key>/', changeOrigin: true, logLevel: 'debug'}));

app.listen(3124)
