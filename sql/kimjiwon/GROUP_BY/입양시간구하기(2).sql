-- 코드를 입력하세요
SET @hour := -1;
--  := 오른쪽 값을 왼쪽에 대입
SELECT (@hour := @hour + 1) AS HOUR,
(SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23;