UPDATE leagues
SET name = $2, season_id = $3
WHERE id = $1;

SELECT * FROM leagues;