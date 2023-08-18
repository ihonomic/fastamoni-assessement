import { StyleSheet, View, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'
import NextButton from './NextButton'
import { useNavigation } from '@react-navigation/native'
import { SquareMeLogoBlack, SquareMeLogoWhite } from '../../assets/svgs/logo'

const slides = [
    {
        id: "1",
        description: "Fast and easy payments to anyone.",
        subtext: "Receive funds sent to you in seconds.",
        image: require('../../assets/images/onBoard1.png'),
        backgroundImage: require('../../assets/images/onBoard1.png'),
        logo: <SquareMeLogoWhite />
    },
    {
        id: "2",
        description: 'A super secure way to pay your bills',
        subtext: "Pay your bills with the cheapest rates in town.",
        image: require('../../assets/images/onBoard2.png'),
        backgroundImage: require('../../assets/images/onBoard2.png'),
        logo: <SquareMeLogoBlack />
    },
    {
        id: "3",
        description: "Spend your money easily without any complications",
        subtext: "",
        image: require('../../assets/images/onBoard3.png'),
        backgroundImage: require('../../assets/images/onBoard3.png'),
        logo: <SquareMeLogoWhite />
    },
]


const OnBoardingScreen = () => {
    const navigation = useNavigation()

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index) // This line keeps throwing up an error when the phone is rotated
    }).current

    // next slide need to be 50% on screen before it will change 
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    // 
    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            navigation.navigate("LoginScreen")
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounce={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator data={slides} scrollX={scrollX} />
            {currentIndex !== 2 && <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />}
        </View>
    )
}

export default OnBoardingScreen

