// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
// 예를 들어 emergency가 [2, 1, 3, 2]라면 [1, 3, 0, 2]를 return합니다.

const solution = (emergency) => {
  let answer = [];

  // 배열을 복사하고 내림차순 정렬
  let sort = emergency.slice().sort((a, b) => b - a)
  for (let i = 0; i < emergency.length; i++) {
    // 1부터 시작하므로 +1
    answer.push(sort.indexOf(emergency[i]) + 1);
  }

  return answer
}