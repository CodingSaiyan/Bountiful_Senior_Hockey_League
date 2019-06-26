INSERT INTO teams (user_id, team_name, team_logo, primary_color, secondary_color, wins, losses, ties, points)
VALUES(${user_id}, ${team_name}, ${team_logo}, ${primary_color}, ${secondary_color}, ${wins}, ${losses}, ${ties}, ${points})
RETURNING *;