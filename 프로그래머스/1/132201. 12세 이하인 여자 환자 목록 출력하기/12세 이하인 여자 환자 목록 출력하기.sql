# 다음은 종합병원에 등록된 환자정보를 담은 PATIENT 테이블입니다. 
# PATIENT 테이블은 다음과 같으며 
# PT_NO, PT_NAME, GEND_CD, AGE, TLNO는 각각 
# 환자번호, 환자이름, 성별코드, 나이, 전화번호를 의미합니다.

# PATIENT 테이블에서 12세 이하인 여자환자의 
# 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 
# 이때 전화번호가 없는 경우, 'NONE'으로 출력시켜 주시고 
# 결과는 나이를 기준으로 내림차순 정렬하고, 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.


SELECT 
    PT_NAME,
    PT_NO,
    GEND_CD,
    AGE,
    CASE
        WHEN TLNO IS NULL THEN 'NONE'
        ELSE TLNO
    END AS TLNO
from  PATIENT
where AGE <= 12 and GEND_CD = 'W'

order by AGE desc, PT_NAME asc

