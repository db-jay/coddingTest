// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

const solution = (array, n) => {
    // 1. array에 n을 push
    let numArr = array
    numArr.push(n)

    // 2. 숫자가 작은 순서대로 sort
    numArr.sort((a, b) => a - b)

    // 3. n의 index를 찾기
    let nIndex = numArr.indexOf(n)

    // 4. n의 index-1, +1 각 요소의 값과 n의 차이를 구하기
    const min = Math.abs(n - numArr[nIndex - 1])
    const max = Math.abs(numArr[nIndex + 1] - n)

    // 5. 예외처리 후 결과 출력
    // array의 길이가 1인 경우
    if (array.length === 1) return array[0]

    //n이 array의 첫번째 요소인 경우
    if (nIndex === 0) return numArr[1];

    return min > max ? numArr[nIndex + 1] : numArr[nIndex - 1]
}
