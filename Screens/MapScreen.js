import { StyleSheet, Text, View} from 'react-native';


export default function MapScreen() {

    return <View style={styles.container}>
        <Text style={styles.title}>MapScreen</Text>      
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
    title: {
        fontWeight: 500,
        fontSize: 30,
    }
});