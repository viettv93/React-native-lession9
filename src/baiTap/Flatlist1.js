import React from "react";
import { View, Image, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import HeaderComponent from "./HeaderComponent";
const array3 = [
    { ava1: require('../anh/ava4.png'), title: 'I love Golden Retriever', numberofmembers: '548 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' },
    { ava1: require('../anh/ava4.png'), title: 'I love Golden Retriever', numberofmembers: '548 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' },
    { ava1: require('../anh/ava5.png'), title: 'The life of a dog king', numberofmembers: '6886 Members' }]
const { width, height } = Dimensions.get('screen')
const renderItem2 = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Image source={item.ava1} resizeMode="contain" />
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '400', fontSize: 18 }}>{item.title}</Text>
                <Text style={{ color: 'rgba(0, 0, 0, 0.45)', fontWeight: '400', fontSize: 18 }}>{item.numberofmembers}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#FA6650', borderRadius: 5, alignItems: 'center', justifyContent: 'center', padding: 6 }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>Joined</Text>
            </TouchableOpacity>
        </View>
    )
}
const Flatlist1 = () => {
    return (
        <View style={{ paddingHorizontal: 20 }}>

            <FlatList data={array3}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem2}
                ListHeaderComponent={<HeaderComponent />} />

        </View>
    )
}

export default Flatlist1