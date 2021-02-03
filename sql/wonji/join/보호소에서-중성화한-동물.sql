SELECT  ins.animal_id, ins.animal_type, ins.name
from animal_ins ins 
left join animal_outs outs
on ins.animal_id = outs.animal_id
where ins.sex_upon_intake like "%intact%" 
and (outs.sex_upon_outcome like "%spayed%" or outs.sex_upon_outcome like "%neutered%")
order by ins.animal_id;