import firebase from './setup';
import { reject } from 'q';
const db = firebase.firestore();


async function getMatchesFromDb() {
    return new Promise((resolve, reject) => {
        const matches = db.collection('matches');
        matches.get().then((snapshot) => {
            resolve(snapshot.docs.map(doc => doc.data()));
        }).catch((err) => {
            reject(err);
        })
    });
}

export default getMatchesFromDb;