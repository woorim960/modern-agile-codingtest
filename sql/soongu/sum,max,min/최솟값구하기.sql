SELECT DATETIME as 시간
from ANIMAL_INS
order by abs(now() - DATETIME) desc
limit 1;