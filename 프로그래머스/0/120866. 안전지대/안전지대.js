function solution(board) {
  const boardSize = board.length;

  // 지뢰 주변 좌표 배열(deep copy)
  let dangerCoords = board.map(v => [...v]);

  // 지뢰 주변 좌표 (상, 하, 좌, 우, 대각선)
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];


  board.forEach((row, x) => {
    row.forEach((col, y) => {
      if (col === 1) {
        for (let i = 0; i < 8; i++) {
          const setX = x + dx[i];
          const setY = y + dy[i];

          // 상,하,좌,우,대각선 좌표 중 유효한 좌표만 위험지역 표시
          if (setX >= 0 && setX < boardSize
            && setY >= 0 && setY < boardSize) {
            dangerCoords[setX][setY] = 1;
          }
        }
      }
    });
  });

  return dangerCoords.flat().filter(v => v === 0).length;
}