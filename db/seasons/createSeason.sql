INSERT INTO seasons ( name, start_date, end_date )
VALUES( ${name}, ${start_date}, ${end_date} )
RETURNING *;