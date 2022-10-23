import { deleteApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC6rmyaurJ8GbH10vYB4QswoBQd5pRDMMo' ,
    authDomain: 'd-aventure.firebaseapp.com' ,
    projectId: 'd-aventure',
    storageBucket: 'd-aventure.appspot.com',
    messagingSenderId: '921176662514',
    appId: '1:921176662514:web:564'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)