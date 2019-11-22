const through = require('through2')
const { TextEncoder } = require('util')
process.stdin
    .pipe(through(function(buf, _, next){
        var enc = new TextEncoder(); // always utf-8
        const encoded = enc.encode(buf);
        console.log(JSON.stringify(encoded))
        next()
    }, (done) => done()))
    .pipe(process.stdout)