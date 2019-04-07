import firebase from './setup';
const db = firebase.firestore();


function createMatchInDb(matchId, matchDetails) {
    const matches = db.collection('matches');
    matches.add({
        matchId,
        matchDetails
    });
}

export default createMatchInDb;