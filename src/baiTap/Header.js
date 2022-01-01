import React from "react";
import { View, Image, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native'
const Header = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{ flex: 9 }}>
                    <Text style={{ color: 'black', fontSize: 26, fontWeight: '600' }}>Circle</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-between' }}>
                    <Image source={require('../anh/scan.png')} resizeMode="contain" />
                    <Image source={require('../anh/icon.png')} resizeMode="contain" />
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30, backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
                <Image source={require('../anh/union.png')} resizeMode="contain" style={{ marginLeft: 9 }} />
                <TextInput placeholder="Send the sample" style={{ color: 'rgba(0, 0, 0, 0.25)', padding: 5, flex: 1 }} />
                <Image source={require('../anh/mic.png')} resizeMode="contain" style={{ marginRight: 9 }} />
            </View>
            <View style={{ marginVertical: 30 }}>
                <ImageBackground source={require('../anh/nen1.png')} style={{ height: 220, justifyContent: 'center', padding: 10 }} resizeMode="contain">
                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 23 }}>How do you </Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 23 }}>create your circle?</Text>
                        <TouchableOpacity style={{ backgroundColor: '#000000', padding: 5, width: 80, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
                            <Text style={{ color: '#FFFFFF' }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Header