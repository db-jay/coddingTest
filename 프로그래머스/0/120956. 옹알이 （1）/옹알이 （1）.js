const solution = (babbling) => {
  // 가능한 발음 : "aya", "ye", "woo", "ma"
  const regexp = /^(aya|ye|woo|ma)+$/;   // 전체 문자열이 일치하는 경우
  const repeating = /(aya|ye|woo|ma)\1/; // 같은 발음이 연속으로 합성된 경우

  return babbling.filter(word =>
    regexp.test(word) && !repeating.test(word)
  ).length;
};