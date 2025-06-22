
# 상반기 아이스크림 총주문량이 3,000보다 높으면서 
# 아이스크림의 주 성분이 과일인 아이스크림의 맛을 
# 총주문량이 큰 순서대로 조회하는 SQL 문을 작성해주세요.

# 상반기 주문 정보를 담은 FIRST_HALF
# 아이스크림 성분에 대한 정보를 담은 ICECREAM_INFO

select f.FLAVOR 
from FIRST_HALF f
inner join ICECREAM_INFO i on i.FLAVOR = f.FLAVOR
where i.INGREDIENT_TYPE = 'fruit_based' 
and f.TOTAL_ORDER > 3000
order by f.TOTAL_ORDER desc
