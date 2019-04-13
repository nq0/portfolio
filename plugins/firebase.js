import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCZgG6nYx--nb4Q7VwfLPQKLS--uy3no0I",
    authDomain: "nya-nq.firebaseapp.com",
    databaseURL: "https://nya-nq.firebaseio.com",
    projectId: "nya-nq",
    storageBucket: "nya-nq.appspot.com",
    messagingSenderId: "567795671860"
  })
}

export default firebase