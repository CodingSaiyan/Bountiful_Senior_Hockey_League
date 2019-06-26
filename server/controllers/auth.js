const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
    
        try {
        const db = req.app.get('db');

        const { name, email, password } = req.body;

        let userResponse = await db.auth.getUserByEmail(email);

        if(userResponse[0]) {
            return res.status(409).json('email already taken');
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let response = await db.auth.createUser({ name, email, hash })
        let newUser = response[0];

        delete newUser.password;
        
        req.session.user = newUser;

        res.send(newUser);

        } catch (err) {
            console.error(err.message);
            return res.status(500).json('SERVER ERROR');
        }
    },

    login: async (req, res) => {
        try {
            const db = req. app.get('db');

            const { email, password } = req.body;

            let userResponse = await db.auth.getUserByEmail(email);
            let user = userResponse[0];

            if(!user){
                return res.status(401).send('credential invalid');
            }

            const isAuthenticated = bcrypt.compareSync(password, user.password);

            if(!isAuthenticated){
               return res.status(430).send('Invalid credentials');
            }

            delete user.password

            req.session.user = user;

            res.send(req.session.user)

        } catch (err) {
            console.error(err.message);
            return res.status(500).json('Failed to login');
        }
    }
} 