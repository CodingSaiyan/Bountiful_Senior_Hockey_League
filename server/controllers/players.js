module.exports = {
    create: async (req, res) => {

        try {
            const db = req.app.get('db');
            const { team_id, first_name, last_name, usa_registration, age, player_number } = req.body;
    
            let newPlayer = await db.players.createPlayer({ team_id, first_name, last_name, usa_registration, age, player_number });
           
            res.send(newPlayer);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Error Creating a player');
        }
    },

    read: async (req, res) => { 
        try {
            const db = req.app.get('db');

            let allPlayers = await db.players.getAllPlayers();
    
            res.send(allPlayers);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Could not retrive all teams');
        }
    },

    update: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { id } = req.params;
    
           
            const { first_name, last_name, usa_registration, age, player_number, goals, assists, team_id } = req.body;
    
    
            let player = await db.players.updatePlayer([ id, first_name, last_name, usa_registration, age, player_number, goals, assists, team_id ]);
    
            res.send(player);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Error Updating player");
        }
    },

    delete: async (req, res) => {
        try {
            const db = req.app.get('db');

            let { id } = req.params;

            let deletedPlayer = await db.players.deletePlayer(id);

            res.send(deletedPlayer);

        } catch (err) {
            console.error(err.message);
            res.status(500).send("Error! Did not delete player");
        }
    }
}