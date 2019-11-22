const { createReadStream } = require("fs");
const through = require('through2')
const arg = process.argv[2];

const readStream = createReadStream(arg);
readStream.pipe(through(function write(buf, {} , next){
    for (var prev = 0, curr = 0; curr < buf.length; ++curr) {
        if (buf[curr] === 0x0a) {
          console.log(new Buffer(buf.slice(prev, curr)));
          prev = curr + 1;
        }
      }
      // last line
      console.log(new Buffer(buf.slice(prev, buf.length - 1)));
    next();
}, function end(done){
    done();
}))
.pipe(process.stdout)