const args = process.argv.slice(2);

const buff = Buffer.from(args);
console.log(buff.toString('hex'))