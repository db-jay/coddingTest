// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = 0;

    // 소수 찾기
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return true;
        }
        return false
    }

    for (let i = 0; i <= n; i++) {
        if (isPrime(i)) answer++
    }

    return answer;
}
