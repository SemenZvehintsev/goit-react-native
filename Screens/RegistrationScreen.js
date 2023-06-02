import { StyleSheet, Text, TextInput, View, Pressable, Image, Keyboard, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import plus from "../images/plus.png"
import { useEffect, useState } from 'react';
import bgImg from "../images/bgImg.jpg"
import { useNavigation } from '@react-navigation/native';


export default function RegistrationScreen() {

    const navigation = useNavigation()

    const [focus, setFocus] = useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus(true);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus(false);
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    const onFocus =(e)=> {
        setFocus(e._dispatchInstances.memoizedProps.name)
    }
    
    const onBlur = () => {
        setFocus('')
    }

    const handleSubmit =()=> {
        const userData = { login, email, password }
        console.log(userData)
        navigation.navigate("Home")
    }

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
    
            <View style={styles.registrationContainer}>
                <View style={styles.avatar}>
                    <Pressable style={styles.avatarButton}>
                        <Image source={plus}></Image>
                    </Pressable>                
                </View >
                    <Text style={styles.title}>Реєстрація</Text>
                    <View style={styles.elseContainer}>
                        <TextInput style={focus === "login" ? [styles.textInput, {borderColor: "#FF6C00"}] : styles.textInput} 
                            name="login" placeholder='Логін'
                            value={login}
                            onChangeText={setLogin}
                            onBlur={ () => onBlur() }
                            onFocus={ (e) => onFocus(e) }
                            />
                        <TextInput style={focus === "email" ? [styles.textInput, {borderColor: "#FF6C00"}] : styles.textInput} 
                            name="email" 
                            placeholder='Адреса електронної пошти'
                            value={email}
                            onChangeText={setEmail}
                            onBlur={ () => onBlur() }
                            onFocus={ (e) => onFocus(e) }
                                                    />
                        <View>
                            <TextInput style={focus === "password" ? [styles.textInput, {borderColor: "#FF6C00"}] : styles.textInput} 
                                name="password" 
                                placeholder='Пароль'
                                value={password}
                                onChangeText={setPassword}
                                onBlur={ () => onBlur() }
                                onFocus={ (e) => onFocus(e) }
                                                        />
                            <Pressable style={styles.passView}>
                                <Text style={styles.text} >Показати</Text>
                            </Pressable>
                        </View>
                    </View>
                    {!keyboardStatus && <View style={styles.elseContainer}>
                        <Pressable style={styles.regButton} onPress={handleSubmit}>
                            <Text style={styles.textButton} >Зареєстуватися</Text>
                        </Pressable>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.text} >Вже є акаунт? </Text>
                            <Pressable style={styles.logLink} onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.textUnderline} >Увійти</Text>
                            </Pressable>
                        </View>
                    </View>}
            </View >
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
    registrationContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingTop: 92,
        paddingBottom: 40,
        paddingHorizontal: 16,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: 'center',
        gap: 32    
    },
    avatar: {
        backgroundColor: "#F6F6F6",
        position: "absolute",
        top: -60,
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    avatarButton: {
        position: "absolute",
        right: -12,
        bottom: 14,
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#FF6C00",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 30,
    },
    elseContainer: {
        width: "100%",
        gap: 16
    },
    textInput: {
        textAlign: "left",
        width: "100%",
        padding: 16,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderColor: "#E8E8E8",
        borderWidth: 1,
    },
    passView:{
        position: "absolute",
        right: 16,
        top: 16
    },
    regButton: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        padding: 16,
        alignItems: "center"    
    },
    textButton: {
        color: "#FFFFFF",
    },
    bottomContainer: {
        justifyContent: "center",
        flexDirection: "row"    
    },
    text: {
        color: "#1B4371",
    },
    textUnderline: {
        color: "#1B4371",
        textDecorationLine: "underline"
    }
});
  