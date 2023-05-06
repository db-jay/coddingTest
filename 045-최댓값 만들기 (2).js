// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) => {
    numbers = numbers.sort((a, b) => b - a)
    let positive = Array.from(numbers).splice(0, 2)
    let negative = Array.from(numbers).splice(-2)
    let reduceNum = (num) => {
        return num.reduce((a, c) => a * c, 1)
    }
    return reduceNum(positive) > reduceNum(negative) ? reduceNum(positive) : reduceNum(negative)
}