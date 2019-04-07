import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

var config = {
    apiKey: "AIzaSyAJhemM9Lf5fT5m1kTopDhRy_SaZ43LjqA",
    authDomain: "gamingadda-9fdba.firebaseapp.com",
    databaseURL: "https://gamingadda-9fdba.firebaseio.com",
    projectId: "gamingadda-9fdba",
    storageBucket: "gamingadda-9fdba.appspot.com",
    messagingSenderId: "283073196427"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;