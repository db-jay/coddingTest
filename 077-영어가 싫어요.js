// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return
// 하도록 solution 함수를 완성해 주세요.

const solution = (numbers) => {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    num.forEach((el, idx) => {
        numbers = numbers.replaceAll(el, idx);
    });

    return parseInt(numbers);
};
