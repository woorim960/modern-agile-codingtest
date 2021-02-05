SELECT hour(DATETIME) as HOUR, count(hour(DATETIME)) as COUNT
from ANIMAL_OUTS
where hour(DATETIME) between '9' and '19'
group by hour(DATETIME)
order by hour asc;