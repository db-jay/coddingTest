str = ["We", "are", "the", "world!"];

// solution 01 | map
solution1 = strlist => strlist.map(i => i.length);


// solution 02 | forEach
const solution2 = strlist => {
    const answer = []
    strlist.forEach(i => {
        answer.push(i.length)
    });
    return answer
};


//solution 03 | for..of
const solution3 = str => {
    let answer = []
    for (let i of strlist) {
        answer.push(i.length)
    }
    return answer
};