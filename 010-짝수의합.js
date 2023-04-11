// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.


function solution(n) {
    return Array(n)
    .fill()
    .map((_, i)=> i + 1)
    .filter((even) => even % 2 ===0)
    .reduce((a, c) => a + c, 0)
}