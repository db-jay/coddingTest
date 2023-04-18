// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.


const solution = (dot) => {
    const x = dot[0];
    const y = dot[1];
    return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3);
}