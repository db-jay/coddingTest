const solution = (l, r) => {
  // l부터 r까지의 숫자 배열 생성
  const numbers = new Array(r)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((num) => num >= l && num <= r)

  // 5, 0을 포함하는 숫자만 필터링
  const result = numbers.filter(num => {
    return num
      .toString()
      .split('')
      .every(v => v === '5' || v === '0')
  })

  // result가 존재하지 않으면 -1 반환
  return result.length ? result : [-1];
}
