UPDATE players
SET first_name = $2, last_name = $3, usa_registration = $4, age = $5, player_number = $6, goals = $7, assists = $8
WHERE id = $1;

UPDATE players SET points = (goals + assists);

SELECT p.*, t.team_name from players p
JOIN teams t ON t.id = p.team_id
WHERE team_id = $9;

