SELECT outs.animal_id, outs.name
from animal_outs outs
left join animal_ins ins
on ins.animal_id = outs.animal_id
where ins.animal_id is null
order by outs.animal_id;