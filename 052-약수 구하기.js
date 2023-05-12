// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

const solution = (n) => {
    let answer = [];
    return new Array(n)
        .fill(0)
        .map((_, i) => i + 1)
        .filter(i => n % i === 0 ? answer.push(i) : null)
}