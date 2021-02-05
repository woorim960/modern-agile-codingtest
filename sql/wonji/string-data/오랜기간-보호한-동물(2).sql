SELECT outs.animal_id, outs.name
from animal_outs outs
left join animal_ins ins
on ins.animal_id = outs.animal_id
order by outs.datetime - ins.datetime desc 
limit 2;