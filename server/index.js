require("dotenv").config();
const express = require('express'),
      app = express(),
      session = require('express-session'),
      massive = require('massive'),
      AC = require('./controllers/auth'),
      TC = require('./controllers/teams'),
      PC = require('./controllers/players'),
      GC = require('./controllers/games'),
      SC = require('./controllers/seasons'),
      LC = require('./controllers/leagues');

      app.use(express.json({extended: false }));

      let { APP_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

      massive(CONNECTION_STRING).then(db => {
        app.set('db', db)
        console.log('BSHL CONNECTED to DB!!!')
      });

      app.use(session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: false
      }))

      // AUTH REGISTER ENDPOINTS
      app.post('/auth/register', AC.register);
      app.post('/auth/login', AC.login);

      // TEAMS ENDPOINTS
      app.post('/api/teams', TC.create);
      app.get('/api/teams', TC.read);
      app.put('/api/teams/:id', TC.update);
      app.delete('/api/teams/:id', TC.delete);
      // FUTURE THOUGHT
      app.get('/api/teams/:id/players');

      // PLAYERS ENDPOINTS
      app.post('/api/players', PC.create);
      app.get('/api/players', PC.read);
      app.put("/api/players/:id", PC.update);
      app.delete("/api/players/:id", PC.delete);

      // GAMES ENDPOINTS
      app.post('/api/games', GC.create);
      app.get('/api/games', GC.read);
      app.put('/api/games/:id', GC.update);
      app.delete('/api/games/:id', GC.delete);

      // SEASONS ENDPOINTS
      app.post('/api/seasons', SC.create);
      app.get('/api/seasons', SC.read);
      app.put('/api/seasons/:id', SC.update);
      app.delete('/api/seasons/:id', SC.delete);

      // LEAGUES ENDPOINTS
      app.post('/api/leagues', LC.create);
      app.get('/api/leagues', LC.read);
      app.put('/api/leagues/:id', LC.update);
      app.delete('/api/leagues/:id', LC.delete);

      app.listen(APP_PORT, () => {console.log(`Skating at ${APP_PORT} MPH`)});