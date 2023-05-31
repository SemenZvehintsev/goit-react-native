import { StyleSheet, Text, TextInput, View, ImageBackground, Pressable, Image, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';


export default function LoginScreen() {

    const [focus, setFocus] = useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(false);

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


    return <View style={styles.container}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.elseContainer}>
                <TextInput style={focus === "email" ? [styles.textInput, {borderColor: "#FF6C00"}] : styles.textInput} name="email" placeholder='Адреса електронної пошти'
                    onBlur={ () => onBlur() }
                    onFocus={ (e) => onFocus(e) }
                                            />
                <View>
                    <TextInput style={focus === "password" ? [styles.textInput, {borderColor: "#FF6C00"}] : styles.textInput} name="password" placeholder='Пароль'
                        onBlur={ () => onBlur() }
                        onFocus={ (e) => onFocus(e) }
                                                />
                    <Pressable style={styles.passView}>
                        <Text style={styles.text} >Показати</Text>
                    </Pressable>
                </View>
            </View>
            {!keyboardStatus && <View style={styles.elseContainer}>
                <Pressable style={styles.regButton}>
                    <Text style={styles.textButton} >Увійти</Text>
                </Pressable>
                <Pressable style={styles.logLink}>
                    <Text style={styles.text} >Немає акаунту? </Text>
                    <Text style={styles.textUnderline} >Зареєструватися</Text>
                </Pressable>
            </View>}
    </View >
}

const styles = StyleSheet.create({
    container: {
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
        fontSize: 16
    },
    logLink: {
        alignItems: "center",
        justifyContent: 'center',
        display: "flex",
        flexDirection: "row"
    },
    text: {
        color: "#1B4371",
        fontSize: 16,
    },
    textUnderline: {
        color: "#1B4371",
        fontSize: 16,
        textDecorationLine: "underline"
    }
});
  