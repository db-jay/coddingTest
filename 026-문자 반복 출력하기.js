// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.


// Solution 01 | forEach()
// const solution = (my_string, n) => {
//     let answer = '';
//     my_string.split('').forEach((i) => {
//         answer += i.repeat(n);
//     })
//     return answer;
// }

// Solution 02 | map()
// const solution = (my_string, n) => [...my_string].map(i => i.repeat(n)).join('');


// Solution 03 | reduce()
const solution = (my_string, n) => my_string.split('').reduce((a, c) => a + c.repeat(n), []);