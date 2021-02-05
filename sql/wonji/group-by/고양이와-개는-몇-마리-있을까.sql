SELECT animal_type, count(animal_type) as count 
from animal_ins 
group by animal_type
order by case animal_type when "cat" then 1 when "dog" then 2 end;