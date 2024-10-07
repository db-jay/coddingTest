const solution = (numlist, n) => {
  // numlist를 n으로부터 가까운 순서대로 내림차순 정렬
  const answer = numlist.sort((a, b) => {
    // n으로부터 a, b의 거리를 연산
    const aDist = Math.abs(a - n)
    const bDist = Math.abs(b - n)

    // 거리가 같을 경우 내림차순
    if (aDist === bDist) {
      return b - a
    }

    // 거리가 가까운 순서대로 정렬
    return aDist - bDist
  })

  return answer
}