module.exports = {
    create: async(req, res) => {
        try {
            const db = req.app.get('db');
            const { team_name, team_logo, primary_color, secondary_color, wins, losses, ties, points } = req.body;
            const { id: user_id } = req.session.user;

            let Team_Name_Check = await db.teams.findTeamByTeamName(team_name)
            
            if(Team_Name_Check[0]){
                return res.status(501).send('Team name already exists');
            }
            
            let team = await db.teams.createTeam({ user_id, team_name, team_logo, primary_color, secondary_color, wins, losses, ties, points});

            res.send(team);
        
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Failed to create a team');

        }
    },

    read: async (req, res) => {
        try {
            const db = req.app.get('db');

            let teams = await db.teams.getAllTeams();

            res.send(teams);


        } catch (err) {
            console.error(err.message);
            res.status(500).send('SERVER ERROR! Failed to fetch teams!');
        }


    },

    update: async (req, res) => {

        try {
            const db = req.app.get('db');
            const { id } = req.params;
            const { team_name, team_logo, primary_color, secondary_color, wins, losses, ties, points } = req.body;
    
            let team = await db.teams.updateTeam([id, team_name, team_logo, primary_color, secondary_color, wins, losses, ties, points ]);
    
            res.send(team);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('FAILED TO UPDATE TEAM')
        }


    },

    delete: async (req, res) => {
        try {
            const db = req.app.get('db');

            const { id } = req.params;

            let deletedTeam = await db.teams.deleteTeam(id);

            res.send(deletedTeam);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Team not deleted');
        }
    }
}