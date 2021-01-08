import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

export default function Header(props) {
    return (
        <View>
            <SafeAreaView style={{marginTop: 20}}> 
                <View style={styles.container}>
                    <Image
                        source={require('../../../assets/logoPlatzi.png')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    container: {
        padding: 20,
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})
