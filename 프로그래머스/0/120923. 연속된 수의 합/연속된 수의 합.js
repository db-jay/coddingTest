const solution = (num, total) => {
  // 등차수열 구하기
  const isomorphicSequence = (2 * total / num - num + 1) / 2;

  /// num개의 연속된 정수 배열 만들기
  return new Array(num)
    .fill(0)
    .map((_, i) => Math.floor(isomorphicSequence) + i);
}