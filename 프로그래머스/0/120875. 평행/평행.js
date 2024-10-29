const solution = (dots) => {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  // 기울기 계산
  const slope1 = (y2 - y1) / (x2 - x1);
  const slope2 = (y4 - y3) / (x4 - x3);
  const slope3 = (y3 - y1) / (x3 - x1);
  const slope4 = (y4 - y2) / (x4 - x2);

  return slope1 === slope2 || slope3 === slope4 ? 1 : 0;
}
