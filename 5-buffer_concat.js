const through = require('through2');
const fs = require('fs');

var allbuf;
process.stdin.pipe(through(function(buf, _, next) {
	if(Buffer.isBuffer(allbuf)) {
		allbuf = Buffer.concat([allbuf, buf]);
	} else {
		allbuf = buf;
    }
    next(null, allbuf)
}, function(done, data) {
    console.log(allbuf)
}));