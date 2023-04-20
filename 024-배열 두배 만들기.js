// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.


// solution 01 | Map()
// const solution = (numbers) =>  numbers.map((item) => item * 2);


// solution 02 | reduce() : 내가 푼 건 아니지만 전개구문과 reduce를 활용한 답변이 너무 멋있어서 저장...!
const solution = (item) => item.reduce((a, c) => [...a, c * 2], []);
