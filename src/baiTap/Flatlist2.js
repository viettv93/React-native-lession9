import React from "react";
import { View,Image,Text,FlatList} from 'react-native'
const array1 = [
    { avatar: require('../anh/ava1.png'), name: 'Golden retriever' },
    { avatar: require('../anh/ava2.png'), name: 'Back of the head' },
    { avatar: require('../anh/ava3.png'), name: 'Adopt' },
    { avatar: require('../anh/ava1.png'), name: 'Golden retriever' },
    { avatar: require('../anh/ava1.png'), name: 'Golden retriever' },
    { avatar: require('../anh/ava1.png'), name: 'Golden retriever' }]
const renderItem = ({ item }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20, marginVertical: 20 }}>
            <Image source={item.avatar} resizeMode="contain" />
            <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: 15, fontWeight: '400' }}>{item.name}</Text>
        </View>
    )
}
const Flatlist2 = () => {
    return (
        <View >
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#000000', fontSize: 23, fontWeight: '500' }}>Popular circle</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', fontSize: 15 }}>More</Text>
            </View>
            <FlatList data={array1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}
export default Flatlist2