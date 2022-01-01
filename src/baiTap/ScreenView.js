import React from "react"
import { View, Dimensions } from 'react-native'
import Header from "./Header"
import Flatlist1 from "./Flatlist1"
import Flatlist2 from "./Flatlist2"
import Footer from "./Footer"

const ScreenView = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 14 }}>
                <Flatlist1 />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 20 }}>
                <Footer />
            </View>
        </View>
    )

}

export default ScreenView