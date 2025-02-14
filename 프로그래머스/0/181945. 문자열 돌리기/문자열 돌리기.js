const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split("");
    input.forEach((item) => console.log(item))
}).on('close',function(){
    str = input[0];
});