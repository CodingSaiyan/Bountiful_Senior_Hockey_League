UPDATE teams
SET team_name = $2, team_logo = $3, primary_color = $4, secondary_color = $5, wins = $6, losses = $7, ties = $8, points = $9
WHERE id = $1;

SELECT * FROM teams;