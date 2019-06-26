INSERT INTO games(date, home_team, away_team, home_score, away_score, locker_home, locker_away, score_keeper, refs1, refs2, arena)
VALUES( ${date}, ${home_team}, ${away_team}, ${home_score}, ${away_score}, ${locker_home}, ${locker_away}, ${score_keeper}, ${refs1}, ${refs2}, ${arena} )
RETURNING *;
