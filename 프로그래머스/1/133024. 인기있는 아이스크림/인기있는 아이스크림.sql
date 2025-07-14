# FIRST_HALF 테이블은 아이스크림 가게의 상반기 주문 정보를 담은 테이블입니다.
# FIRST_HALF 테이블 구조는 다음과 같으며, 
# SHIPMENT_ID, FLAVOR, TOTAL_ORDER는 각각 아이스크림 공장에서 아이스크림 가게까지의 
# 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량을 나타냅니다.

# 상반기에 판매된 아이스크림의 맛을 
# 총주문량을 기준으로 내림차순 정렬하고 
# 총주문량이 같다면 출하 번호를 기준으로 오름차순 정렬하여 조회하는 SQL 문을 작성해주세요.


SELECT FLAVOR
from FIRST_HALF
order by TOTAL_ORDER desc, SHIPMENT_ID asc