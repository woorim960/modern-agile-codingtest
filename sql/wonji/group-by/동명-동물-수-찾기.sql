SELECT name, count(name) as count
from animal_ins
where name is not null
group by name having count(name) >= 2
order by name;