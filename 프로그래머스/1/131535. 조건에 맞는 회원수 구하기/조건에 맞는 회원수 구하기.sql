# USER_INFO 테이블에서 
# 2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원이 몇 명인지 출력하는 SQL문을 작성해주세요.


select COUNT(USER_ID)
from USER_INFO
where YEAR(JOINED) = 2021
    and AGE between 20 and 29;