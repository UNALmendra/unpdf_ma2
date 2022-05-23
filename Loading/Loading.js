import { View, Image, StyleSheet, Text } from 'react-native'

export const Loading = () => {
    return <View style={styles.container}>
                <Image
                style={styles.image}
                source={require('../assets/logo/loading.gif')}
                />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
        marginTop: 20
    },
    loadingText: {
        fontSize: 20,
        fontFamily: 'sans-serif-light'
    }
})