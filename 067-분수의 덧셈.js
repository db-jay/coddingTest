// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = (numer1, denom1, numer2, denom2) => {
    let result = []
    const value = (a, b) => {
        return a % b === 0 ? b : value(b, a % b)
    };
    // 분자
    let numer = numer1 * denom2 + numer2 * denom1;

    // 분모
    let denom = denom1 * denom2

    // numer, denom 약분
    let gcd = value(numer, denom);

    // 기약분수 result에 push
    result.push(numer / gcd, denom / gcd);
    return result
};