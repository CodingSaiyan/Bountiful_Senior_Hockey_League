UPDATE games
SET date = $2, home_team = $3, away_team = $4, home_score = $5, away_score = $6, locker_home = $7, locker_away = $8, score_keeper = $9, refs1= $10, refs2 = $11, arena = $12
WHERE id = $1;