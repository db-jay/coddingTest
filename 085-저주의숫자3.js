// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
// 3x 마을 사람들의 숫자는 다음과 같습니다.

// solition01 | reduce
const solution1 = (n) => {
  const target = 3;
  return new Array(n)
    .fill(0)
    .reduce((acc, cur) => {
      acc += 1;
      while (acc % target === 0 || acc.toString().includes(target)) {
        acc += 1;
      }
      return acc
    }, 0)
};

// solution02 | map
const solution2 = (n) => {
  const target = 3;
  return [...new Array(200)]
    .map((_, i) => i + 1).filter((v) => v % target !== 0 && !v.toString().includes(target))[n - 1];
}