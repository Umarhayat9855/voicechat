import React, { Component } from 'react';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import ChatBox from './Components/Chat';

//import {f , auth , database} from './Configure/configure';
class App extends Component {
  state = { 
    email:'',
    Password:'',
    route:true
   }

onlogin=()=>{
    console.log('Email is',this.state.email),
    console.log('Password is',this.state.Password)
    auth.createUserWithEmailAndPassword(this.state.email,this.state.Password)
    .then((userobj)=>console.log('user login',userobj))
    .catch((error)=>console.log('error',error))
}
// onlogin=()=>{
  
//   console.log('Email is',this.state.email),
//   console.log('Password is',this.state.Password)
//   auth.signInWithEmailAndPassword(this.state.email,this.state.Password)
//   .then((userobj)=>console.log('user login',userobj))
//   .catch((error)=>console.log('error',error))
// }
  render() { 
    return ( 
      <View>
        {/* {
          this.state.route === false ?
          <View>
            <Text>
             vevervevewvweveveve
            </Text>
          </View>
          :
          <View>
            <Text>
             efvevervewvewvrwevreverevaeeavcraecaecveacaeeeeeeeeeeecvaevcrae
            </Text>
          </View>
        } */}
        <Text>bceui</Text>
        <ChatBox/>
      </View>
     );
  }
} 
export default App;