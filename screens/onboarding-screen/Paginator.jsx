import { StyleSheet, Animated, useWindowDimensions, View } from 'react-native'
import React from 'react'

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ position: "absolute", bottom: 280, left: 12 }}>
            <View style={{ flexDirection: "row", height: 64, flex: 0.3 }}>
                {data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp",
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    })
                    // return <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
                    return <Animated.View key={i.toString()} style={[styles.dot, { width: 28, opacity }]} />
                })
                }
            </View>
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginHorizontal: 8
    }
})