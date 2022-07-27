import {View,Text} from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {
    const username = (route && route.params && route.params.tile) ? route.params.username : ''

    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Details of user {username}</Text>
        </View>
    )
}

export default DetailsScreen