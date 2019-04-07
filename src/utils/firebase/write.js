import firebase from './setup';
const db = firebase.firestore();


function createMatchInDb(matchId, matchDetails) {
    return new Promise((resolve, reject) => {
        const matches = db.collection('matches');
        matches.add({
                matchId,
                matchDetails
            })
            .then(() => resolve({ status: 'success', msg: 'Data Saved!' }))
            .catch(() => reject({ status: 'fail', msg: 'Could not save data' }))
    });
}

export default createMatchInDb;