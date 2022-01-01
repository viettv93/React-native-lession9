import React from "react";
import { View, Image } from "react-native"
const Footer = () => {
    return (
        <View style={{ justifyContent: 'center', flex: 1, paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../anh/icon2.png')} resizeMode="contain" />
                <Image source={require('../anh/item1.png')} resizeMode="contain" />
                <Image source={require('../anh/item3.png')} resizeMode="contain" />
                <Image source={require('../anh/icon3.png')} resizeMode="contain" />
                <Image source={require('../anh/icon5.png')} resizeMode="contain" />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../anh/home.png')} />
            </View>
        </View>
    )
}

export default Footer