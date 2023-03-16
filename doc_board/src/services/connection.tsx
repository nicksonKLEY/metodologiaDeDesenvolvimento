import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCNDjA7PpPeBoAecRmOrHFKdBwEUozMrIc',

  authDomain: 'docboard-92508.firebaseapp.com',

  projectId: 'docboard-92508',

  storageBucket: 'docboard-92508.appspot.com',

  messagingSenderId: '959981258689',

  appId: '1:959981258689:web:31863df3d3345273c99140',

  measurementId: 'G-GJ7RLKHS52',
}

// Initialize Firebase
if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig)
}
export default firebase
