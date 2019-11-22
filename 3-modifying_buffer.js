const through = require('through2')

process.stdin.pipe(
    through(function write(buf, _ , next){
        for (var i = 0; i < buf.length; i++) {
            if(buf[i] === 46) {
                buf.write('!', i);
            }
        };
        console.log(buf)
        next();
    }, function end(done){
        done();
    }))
    .pipe(process.stdout)