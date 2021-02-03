SELECT animal_id, name, sex_upon_intake
from animal_ins
/*
where name = "Lucy" or name = "Ella" or name = "Pickle" or name = "Rogan" or name = "Sabrina" or name = "Mitty";
*/
where name in ("Lucy", "Ella", "Pickle", "Rogan", "Sabrina", "Mitty")
order by animal_id;