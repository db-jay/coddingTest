// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.


// 1. i 부터 j 사이의 숫자 나열하고 1개씩 배열에 넣기
// 2. 배열 내에 k문자열이 몇개 있는지 확인
const solution = (i, j, k) => {
    return new Array(j - i + 1)
        .fill(0)
        .map((_, idx) => i + idx)
        .join('')
        .split('')
        .filter(item => item === k.toString()).length;
}