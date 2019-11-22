const numbers = process.argv[2];
const arr =  new Uint32Array(1);
arr[0] = numbers
const arr16 = new Uint16Array(arr.buffer)
console.log(JSON.stringify(arr16))