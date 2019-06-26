const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const SET_PLAYERS = 'SET_PLAYERS'
const SET_TEAMS = 'SET_TEAMS'
const SET_GAMES = 'SET_GAMES'

const initialState = {
    isAuthenticated: false,
    user: {},
    players: [],
    teams: [],
    games: []

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { ...state, isAuthenticated: true, user: action.payload }
        case USER_LOGGED_OUT:
            return { ...state, isAuthenticated: false, user: {} }
        case SET_PLAYERS:
            return { ...state, players: action.payload }
        case SET_TEAMS:
            return { ...state, teams: action.payload }
        case SET_GAMES:
            return { ...state, games: action.payload }
        default: 
        return state;
    }
}

export function userLoggedIn(user) {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT
    }
}

export function setPlayers(players) {
    return {
        type: SET_PLAYERS,
        payload: players
    }
}

export function setTeams(teams) {
    return {
        type: SET_TEAMS,
        payload: teams
    }
}
export function setGames(games) {
    return {
        type: SET_GAMES,
        payload: games
    }
}