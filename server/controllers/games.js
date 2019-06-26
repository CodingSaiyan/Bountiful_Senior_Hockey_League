module.exports = {
    create: async (req, res) => {
        try {
            const db = req.app.get('db');   
            const { date, home_team, away_team, home_score, away_score, locker_home, locker_away, score_keeper, refs1, refs2, arena } = req.body

            let newGame = await db.games.createGame({ date, home_team, away_team, home_score, away_score, locker_home, locker_away, score_keeper, refs1, refs2, arena });

            res.send(newGame);
        } catch (err) {
            console.error(ree.message);
            res.status(500).send('Error Creating a game');
        }
       
         

    },

    read: async (req, res) => {
        try {
            const db = req.app.get('db');

            let games = await db.games.getAllGames();

            res.send(games);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Error fetching games');
        }
    },

    update: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { id } = req.params;
    
            const { date, home_team, away_team, home_score, away_score, locker_home, locker_away, score_keeper, refs1, refs2, arena } = req.body;
    
            let updatedGame = await db.games.updateGame([ id, date, home_team, away_team, home_score, away_score, locker_home, locker_away, score_keeper, refs1, refs2, arena ]);
    
            res.send(updatedGame);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Error Updating Game')
        }
    },

    delete: async (req, res) => {
        try {
            const db = req.app.get('db'); 
            const { id } = req.params;
    
            let deletedGame = await db.games.deleteGame(id);
    
            res.send(deletedGame);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('error deleting game!')
        }
    }
}