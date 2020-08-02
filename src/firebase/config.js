import * as firebase from 'firebase/app';
// firebase/storage is going to store our images
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCGk2Li-WPphJ4zV9IXENwJsz3_as1Qfn8',
	authDomain: 'higram-b9f23.firebaseapp.com',
	databaseURL: 'https://higram-b9f23.firebaseio.com',
	projectId: 'higram-b9f23',
	storageBucket: 'higram-b9f23.appspot.com',
	messagingSenderId: '913611837021',
	appId: '1:913611837021:web:c16cfc672ec017a56c47b4'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
