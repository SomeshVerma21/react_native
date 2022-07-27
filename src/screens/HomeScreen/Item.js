import {Text,TouchableOpacity,View, ImageBackground} from 'react-native'
import React from 'react'
import HomeItemStyles from './HomeItemStyles'
import LinearGradient from 'react-native-linear-gradient';

const Item = ({ value, gotoDetails }) => {

    return(
        <TouchableOpacity
            style = {HomeItemStyles.Container}
            onPress = {() => {
                gotoDetails(value)
            }}
        >
            <View style={HomeItemStyles.content}>
                <LinearGradient colors={['#e88133', '#e6d1c1']} 
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={HomeItemStyles.linearGradient}>
                        <Text style={HomeItemStyles.title}>{value.title}</Text>
                        <View style={HomeItemStyles.priceContainer}>
                            <Text style ={HomeItemStyles.initialPrice}>$ {value.price}</Text>
                            <Text style ={HomeItemStyles.discountPrice}>$ {value.discountPrice}</Text>
                        </View>
                        <View style={HomeItemStyles.authorContainer}>
                            <Text style ={HomeItemStyles.authorName}>By {value.author}</Text>
                        </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>

    )
}

export default Item