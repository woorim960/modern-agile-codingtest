SELECT ins.animal_id, ins.name
from animal_ins ins
inner join animal_outs outs
on ins.animal_id = outs.animal_id
where ins.datetime > outs.datetime
order by ins.datetime;