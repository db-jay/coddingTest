// case 01. object 사용
// function solution(rank, attendance) {
//   let students = rank.map((r, i) => ({ number: i, rank: r, isAttend: attendance[i] }));

//   let result = students
//     .filter(student => student.isAttend)
//     .sort((a, b) => a.rank - b.rank)
//     .slice(0, 3);
//   return (result[0].number * 10000) + (100 * result[1].number) + result[2].number;
// }

// case 02. array 사용
function solution(rank, attendance) {
  let result = [];

  rank.map((r, i) => {
    if (attendance[i]) result = [...result, [r, i]]
  })

  result
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3)

  const [a, b, c] = result.map(item => item[1])

  return (a * 10000) + (b * 100) + c;
}