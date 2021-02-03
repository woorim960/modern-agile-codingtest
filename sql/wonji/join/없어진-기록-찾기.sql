SELECT outs.animal_id, outs.name
from animal_outs outs
inner join animal_ins ins
on ins.animal_id = outs.animal_id
where ins.animal_id is null;