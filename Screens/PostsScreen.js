import { StyleSheet, Text, View, Image} from 'react-native';
import bgImg from "../images/bgImg.jpg"


export default function PostsScreen() {

    return <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={bgImg} style={styles.image} />
            <View style={styles.textWrapper}>
                <Text style={styles.name}>Natali Romanova</Text>      
                <Text style={styles.text}>email@example.com</Text>      
            </View>
        </View>       
    </View >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: "#BDBDBD",
        gap: 32    
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 16
    },
    textWrapper: {
        fontSize: 13
    },
    name: {
        fontWeight: 700,
    }
});