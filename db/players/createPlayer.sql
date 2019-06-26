INSERT INTO players ( team_id, first_name, last_name, usa_registration, age, player_number )
VALUES ( ${team_id}, ${first_name}, ${last_name}, ${usa_registration}, ${age}, ${player_number} );

SELECT p.*, t.team_name, t.id as team_id
FROM players p
JOIN teams t ON t.id = p.team_id
WHERE t.id = ${team_id};

UPDATE players SET points = (goals + assists);