import { StyleSheet, Animated, View, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'


const NextButton = ({ scrollTo, percentage }) => {
    const size = 100
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100

            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage])
        return () => {
            progressAnimation.removeAllListeners()
        }
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={scrollTo}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )

}

export default NextButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        bottom: 100,
        right: 70
    },
    button: {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 108,
        height: 49,
        justifyContent: "center",
        alignItems: "center"
    }
});