import { StyleSheet, Text, View, Image} from 'react-native';
import bgImg from "../images/bgImg.jpg"


export default function PostsScreen() {

    return <View style={styles.container}> 
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
});