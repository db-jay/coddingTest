// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
// 문자열 my_string이 매개변수로 주어질 때, 
// 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
const solution = (my_string) => {
  let int = my_string.split(" ").filter((v) => v.match(/[^ ]/g));
  let operator = '+'

  return int.reduce((acc, curr, idx, arr) => {
    if (curr === "+") {
      operator = "+"
      return acc
    } else if (curr === "-") {
      operator = "-"
      return acc
    } else {
      if (operator === "+") return acc + parseInt(curr);
      if (operator === "-") return acc - parseInt(curr);
    }
  }, 0)
}