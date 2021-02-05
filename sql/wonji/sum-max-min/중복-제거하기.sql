SELECT count(distinct name) as count
from animal_ins 
where name is not null;