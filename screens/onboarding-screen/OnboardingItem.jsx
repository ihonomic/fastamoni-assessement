import {
    StyleSheet, Text, View,
    useWindowDimensions, ImageBackground, Platform, TouchableOpacity
} from 'react-native'
import React from 'react'
import { COLORS, SIZES, TYPOGRAPHY } from '../../theme'
import { useNavigation } from '@react-navigation/native'


const OnboardingItem = ({ item }) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()

    return (
        <ImageBackground
            source={item.backgroundImage}
            resizeMode='cover'
            style={[styles.container, { width: '100%', height: '100%' }]}
        >
            <View style={styles.logo}>
                {item.logo}
            </View>

            <View style={[styles.container, { width }]}>

                <View style={{ flex: 0.7, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                    <Text style={styles.description} >{item.description}</Text>
                    <Text style={styles.subtext} >{item.subtext}</Text>

                </View>
            </View>

            {item.id !== "3" && <Text onPress={() => { navigation.navigate("welcome") }} style={styles.skip}>Skip</Text>}

            {item.id === "3" && (
                <View style={{ alignItems: "center", bottom: 80 }}>
                    <TouchableOpacity
                        style={styles.getStartedBtn}
                        onPress={() => navigation.navigate("welcome")}>
                        <Text>Get started</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* SHADOW GRADIENT  */}

            {/* <View style={{
                position: "absolute",
                bottom: 0, width: "100%",
                height: 132,
                backgroundColor: "transparent",
                opacity: 0.2
            }} /> */}
        </ImageBackground>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 0.5,
        justifyContent: 'center',
    },
    title: {
        ...TYPOGRAPHY.h1,
        fontSize: SIZES.xl - 2,
        marginBottom: SIZES.xs,
        textAlign: 'center',
    },
    description: {
        ...TYPOGRAPHY.h2,
        color: COLORS.white,
        fontSize: 24,
        fontWeight: "bold"
    },
    subtext: {
        ...TYPOGRAPHY.h2,
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 12,
        opacity: 0.8
    },
    skip: {
        position: "absolute",
        bottom: 100,
        ...TYPOGRAPHY.h2,
        color: COLORS.white,
        fontSize: 15,
        marginLeft: 25,
        fontWeight: "bold"
    },
    logo: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 70,
        marginLeft: 12
    },
    getStartedBtn: {
        width: 312,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 8
    }
})