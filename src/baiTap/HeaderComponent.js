import React from "react";
import{ View , Text} from 'react-native'
import Flatlist2 from "./Flatlist2";
import Header from "./Header";


const HeaderComponent = () => {
    return(
        <View >
            <Header/>
            <Flatlist2/>
            <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#000000', fontSize: 23, fontWeight: '500' }}>The circle to join</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', fontSize: 15 }}>More</Text>
                </View>
        </View>
    )
}

export default HeaderComponent