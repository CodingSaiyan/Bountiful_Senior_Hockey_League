module.exports = {
    create: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { name, season_id } = req.body;
            const newLeague = await db.leagues.createLeague({ name, season_id });
            

            res.send(newLeague);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to create a league');
        }

    },

    read: async (req, res) => {
        try {
            const db = req.app.get('db');
            const leagues = await db.leagues.getLeagues()
    
            res.send(leagues);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to get all Leagues');
        }

    },

    update: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { id } = req.params;
            const { name, season_id } = req.body;
    
            const editedLeague = await db.leagues.updateLeague([ id, name, season_id ]);
    
            res.send(editedLeague);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to update league');
        }
    },

    delete: async (req, res) => {
       try {
        const db = req.app.get('db');
        const { id } = req.params;

        const deletedLeague = await db.leagues.deleteLeague(id);

        res.send(deletedLeague);
       } catch (err) {
           console.error(err.message);
           res.status(500).send('Failed to delete league');
       }

    }
}