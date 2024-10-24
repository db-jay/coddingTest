// CASE 01. map 사용
const solution = (lines) => {
  const segment = new Map();

  // 선분 배열 순회하여 중복 값 검사
  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      segment.set(i, (segment.get(i) || 0) + 1);
    }
  });

  // 2개이상 중복되는 선분 개수 계산
  let answer = 0;
  segment.forEach(v => {
    if (v >= 2) answer++;
  })
  
  return answer;
}

// // CASE 02. set 사용
// const solution = (lines) => {
//   let segment = []
//   let answer = new Set();

//   // 선분 배열 생성
//   lines.map((num) => {
//     for (let i = num[0]; i < num[1]; i += 0.5) {
//       segment.push([i, i + 0.5]);
//     }
//   });

//   // 선분 배열 순회하여 중복 값 검사
//   segment.forEach((range) => {
//     let count = segment.filter(item => 
//       item[0] === range[0] && item[1] === range[1]
//     ).length;

//     // 2개이상 중복되는 선분 개수 계산
//     if (count >= 2) {
//       answer.add(`${range[0]}-${range[1]}`)
//     }
//   });

//   // 실제 선분 길이 계산
//   return answer.size / 2;
// }