#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var Builder = require("jspm").Builder;
var builder = new Builder();
var systemIstanbul = require('systemjs-istanbul-hook');

systemIstanbul.hookSystemJS(builder.loader);
builder.bundle('src/main', path.join(__dirname, 'src/main-bundle-systemIstanbul.js')).then(function() {
    var originalSources = systemIstanbul.originalSources;
    fs.writeFileSync('original-source-data.json', JSON.stringify(originalSources));
});

