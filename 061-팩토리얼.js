// i팩토리얼(i!)은 1부터 i까지 정수의 곱을 의미합니다.예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.


function solution(n) {
    let i = 1;
    let factorial = 1;

    // factorial이 숫자 n보다 작거나 같을 때까지 루프.
    while (factorial <= n) {
        // 변수 "i" 1씩 증가.
        i++;
        // factorial에 1씩 증가된 i를 곱한 값을 할당.
        factorial *= i;
    }
    // i를 1씩 증가시키며 factorial을 구했기 때문에, 1을 빼준다.
    return i - 1;
}
