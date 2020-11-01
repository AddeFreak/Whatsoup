import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD7y66EHh60ExaxREgS5v9mcM587jQq4dQ",
    authDomain: "ey-whatsoup.firebaseapp.com",
    databaseURL: "https://ey-whatsoup.firebaseio.com",
    projectId: "ey-whatsoup",
    storageBucket: "ey-whatsoup.appspot.com",
    messagingSenderId: "150063148708",
};
class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
    friend = () => this.db.ref('friend');
}

export default Firebase;