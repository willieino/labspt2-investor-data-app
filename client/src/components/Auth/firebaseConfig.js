
import app from 'firebase/app'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyCUwftk4QC8QgZP7dPfM4V76U6wMkwiAa4",
    authDomain: "pickem-597ad.firebaseapp.com",
    databaseURL: "https://pickem-597ad.firebaseio.com",
    projectId: "pickem-597ad",
    storageBucket: "pickem-597ad.appspot.com",
    messagingSenderId: "452859929022"
  };
  
  const fireApp = app.initializeApp(config)


  export const fire = fireApp.auth()