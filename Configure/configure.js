import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyCbqZ-jjYm5eE8za4e6komsgDTFc1hEDEc",
//     authDomain: "adsmob-a259d.firebaseapp.com",
//     databaseURL: "https://adsmob-a259d.firebaseio.com",
//     projectId: "adsmob-a259d",
//     storageBucket: "adsmob-a259d.appspot.com",
//     messagingSenderId: "600630674726",
//     appId: "1:600630674726:web:8d90c72b4c11767d1bede7",
//     measurementId: "G-QVEV4G3DPP"
//   };
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// export const f = firebase;
// export const database = firebase.database();
// export const auth = firebase.auth();
// export const storage = firebase.storage();
class Fire {
  constructor(){
    this.init()
    this.checkAuth()
  }
  init=()=>{
    if (!firebase.app.length){
      firebase.initializeApp({
        apiKey: "AIzaSyCbqZ-jjYm5eE8za4e6komsgDTFc1hEDEc",
        authDomain: "adsmob-a259d.firebaseapp.com",
        databaseURL: "https://adsmob-a259d.firebaseio.com",
        projectId: "adsmob-a259d",
        storageBucket: "adsmob-a259d.appspot.com",
        messagingSenderId: "600630674726",
        appId: "1:600630674726:web:8d90c72b4c11767d1bede7",
        measurementId: "G-QVEV4G3DPP"
      })
      //firebase.initializeApp(firebaseConfig);
// firebase.analytics();
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        firebase.auth().signInAnonymously();
      }
    })
  };
  send = messages => {
    messages.forEach(item => {
      const message ={
        text:item.text,
        timestamp:firebase.database.ServerValue.TIMESTAMP,
        user:item.user
      }
      this.db.push(message);
    });
  };
  parse = message => {
    const {User, text, timestamp} = messages.val()
    const {key:_id}= message
    const createAt = new Date(timestamp)
    return{
      _id,
      createAt,
      text,
      User,
    }
  };
  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };
  off(){
    this.db.off()
  }
  
  get db(){
    return firebase.database().ref("massage");
  }
  get uid(){
    return (firebase.auth().currentUser || {}).uid;
  }
}
// export const f = firebase;
// export const database = firebase.database();
// export const auth = firebase.auth();
// export const storage = firebase.storage();
export default new Fire();