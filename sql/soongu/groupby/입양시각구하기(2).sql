SET @hour = -1;
SELECT
    (@hour :=@hour+1) as HOUR,
    (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT
FROM
    ANIMAL_OUTS
WHERE 
    @hour < 23;