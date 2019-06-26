module.exports = {
    create: async (req, res) => {
        try {
            
        const db = req.app.get('db');
        const { name, start_date, end_date } = req.body;

        const newSeason = await db.seasons.createSeason({ name, start_date, end_date });

        res.send(newSeason);
        } catch (err) {
            console.error(err.message);
            res,status(500).send('Failed to create a season');
        }

    },

    read: async (req, res) => {
       try {
            const db = req.app.get('db');
            let allSeasons = await db.seasons.getSeasons();
            res.send(allSeasons);
       } catch (err) {
           console.error(err.message);
           res.status(500).send("Failed to get all seasons");
       }

    },

    update: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { id } = req.params;
            const { name, start_date, end_date } = req.body;
    
            const editedSeason = await db.seasons.updateSeason([ id, name, start_date, end_date ]);
    
            res.send(editedSeason);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to update Season');
        }


    },

    delete: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { id } = req.params;
    
            let deletedSeason = await db.seasons.deleteSeason(id);
    
            res.send(deletedSeason);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to delete season');
        }


    }
}