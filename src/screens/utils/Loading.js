import {StyleSheet} from 'react-native'
import React from "react";
import {Text, View} from "react-native"
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const itemCount = Array(5)

const LoadingScreen = () => {
    return(
        <View style = {ScreenStyle.mainScreen}>
            <View style = {ScreenStyle.subContainer}>
                <ShimmerPlaceHolder style={ScreenStyle.shimmerEffact}/>
            </View>
            <View style = {ScreenStyle.subContainer}>
                <ShimmerPlaceHolder style={ScreenStyle.shimmerEffact}/>
            </View>
            <View style = {ScreenStyle.subContainer}>
                <ShimmerPlaceHolder style={ScreenStyle.shimmerEffact}/>
            </View>
        </View>
    )
}

export default LoadingScreen


const ScreenStyle = StyleSheet.create({
    mainScreen:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },

    subContainer:{
        flex:1,
        flexDirection:'row',
        height:100
    },

    shimmerEffact:{
        flex:1,
        marginStart:20,
        marginEnd:20,
        marginTop:10,
        height:140,
        borderRadius:10
    }

})