// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.


const solution = (my_string) => {
    return (my_string.match(/\d+/g) ?? []) 
        // \d+ : 숫자가 1개 이상인 것을 찾아서 배열로 반환하고 nullish 연산자를 통해 예외처리
        .reduce((a, c) => parseInt(a) + parseInt(c), 0)
}
