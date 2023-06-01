import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import bgImg from "./images/bgImg.jpg"
import LoginScreen from './Screens/LoginScreen';


export default function App() {
  return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
        <RegistrationScreen/>
        {/* <LoginScreen/> */}
      </ImageBackground>

    </View>
  </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 16,
},
image: {
    flex: 1,
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
},
});
