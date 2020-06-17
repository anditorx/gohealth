import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyA8hRfSvMT3vNhnM_QyQyxpAFWDm7t4d6Y',
  authDomain: 'my-doctor-v1.firebaseapp.com',
  databaseURL: 'https://my-doctor-v1.firebaseio.com',
  projectId: 'my-doctor-v1',
  storageBucket: 'my-doctor-v1.appspot.com',
  messagingSenderId: '277411749745',
  appId: '1:277411749745:web:aaf4a47e7fdf06de4920d0',
});

const Fire = firebase;
export default Fire;
