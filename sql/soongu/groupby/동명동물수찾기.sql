SELECT NAME, count(NAME) as COUNT
from ANIMAL_INS
group by NAME
having count(NAME) >= 2
order by NAME;