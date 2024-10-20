const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    let result = str
    .split('')
    .map(v => {
        return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
    })
    .join('');
    
    console.log(result);
});