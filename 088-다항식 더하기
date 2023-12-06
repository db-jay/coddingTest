// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 
// solution 함수를 완성해보세요.같은 식이라면 가장 짧은 수식을 return 합니다.


// solution 01 | reduce
const solution1 = (polynomial) => {
    const expression = polynomial.split(" + ");

    const numX = expression
        .filter(el => el.includes('x'))
        .reduce((acc, cur) => {
            return acc + (cur === "x" ? 1 : parseInt(cur));
        }, 0);

    const num = expression
        .filter(el => !el.includes('x'))
        .reduce((acc, cur) => {
            return acc + parseInt(cur)
        }, 0)

    let answer = []
    if (numX !== 0) answer.push(`${numX === 1 ? '' : numX}x`)
    if (num !== 0) answer.push(num)

    return answer.join(" + ") || 0;
};


// solution 02 | forEach
const solution2 = (polynomial) => {
    const expression = polynomial.split(" + ");

    let numX = 0;
    let num = 0;

    expression.forEach(el => {
        if (el.includes('x')) {
            numX += (el === "x" ? 1 : parseInt(el))
        } else {
            num += parseInt(el)
        }
    });

    return [
        numX === 0 ? '' : numX === 1 ? 'x' : `${numX}x`,
        num === 0 ? '' : num
    ]
        .filter(el => el !== '')
        .join(" + ") || 0;
}

console.log(solution1("3x + 2x + 4 + 1")); // 5x + 5
console.log(solution1("x + x + 1"));       // 2x + 1
console.log(solution2("2 + 3"));           // 5
console.log(solution2("3x + x"));          // 4x
console.log(solution2("x"));               // x