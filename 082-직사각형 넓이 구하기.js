// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
// 직사각형 네 꼭짓점의 좌표 
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 
// dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 
// solution 함수를 완성해보세요.

// solution 01 | set
const solution1 = (dots) => {
  /**
  [
      [x1, y1],[0,0]
      [x2, y2],[1,0]
      [x3, y3],[1,1]
      [x4, y4],[0,1]
  ];
   */

  let x = []
  let y = []

  dots.map(dot => {
    x = [...x, dot[0]]
    y = [...y, dot[1]]
  })

  const setDots = (param) => {
    let answer = [...new Set(param)].sort((a, b) => b - a)
    return [answer[0] - answer[1]]
  }

  return setDots(x) * setDots(y)
}

// solution 02 | Math
const solution2 = (dots) => {
  let x = []
  let y = []

  dots.map(dot => {
    x = [...x, dot[0]]
    y = [...y, dot[1]]
  })

  const xLength = Math.max(...x) - Math.min(...x)
  const yLength = Math.max(...y) - Math.min(...y)

  return xLength * yLength
}