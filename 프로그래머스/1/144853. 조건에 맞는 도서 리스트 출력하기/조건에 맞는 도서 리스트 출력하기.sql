# 다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(BOOK) 테이블입니다.
# BOOK 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.
# BOOK 테이블에서 2021년에 출판된 '인문' 카테고리에 속하는 도서 리스트를 찾아서 
# 도서 ID(BOOK_ID), 출판일 (PUBLISHED_DATE)을 출력하는 SQL문을 작성해주세요.
# 결과는 출판일을 기준으로 오름차순 정렬해주세요.


SELECT 
    BOOK_ID,
    DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM BOOK
WHERE CATEGORY = '인문' and 
    YEAR(BOOK.PUBLISHED_DATE) = '2021'
ORDER BY PUBLISHED_DATE ASC
    
