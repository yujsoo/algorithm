const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = [];

rl.on('line', function (line) {
    input = line.split("")

    for(let i=0; i<input.length; i++){
        if (input[i] === input[i].toUpperCase()){
            //console.log(i) // 입력 글자 대문자 인덱스 찾기 1,3,5
            //console.log(input[i].toLowerCase()) // 소문자 변환
            result.push(input[i].toLowerCase())
            //console.log(result)
        }else{
            //console.log(input[i].toUpperCase()) // 대문자 변환
            result.push(input[i].toUpperCase())
            //console.log(result)
        }
    }
    result = result.join("")
    console.log(result)
    
}).on('close',function(){
    str = input[0];
});