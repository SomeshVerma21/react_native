import { read } from 'fs'
import {StyleSheet} from 'react-native'

const HomeItemStyles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        backgroundColor:'gray',
        margin:10,
        borderRadius:10,
        borderWidth:0,
        borderColor:'green',
        height: 150,
        shadowOffset:2,
        shadowColor:'red',
        justifyContent: 'center'
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },

    content:{
        flex:1,
        borderTopEndRadius:10,
        borderBottomEndRadius:10,
        borderTopStartRadius:10,
        borderBottomStartRadius:10,
        backgroundColor:'red',
        overflow:'hidden'
    
    },
    text:{
        padding:5,
        height:100,
        color:'black',
        textAlignVertical:'center'
    },

    image:{
        flex:1,
        resizeMode:'center',
        flexDirection:'row'
    },

    title:{
        marginLeft:20,
        marginTop:10,
        fontSize:25,
        fontStyle:'normal',
        color:'black',
        flex:1, 
    },
    priceContainer:{
        flex:1,
        flexDirection:'row',
    },

    initialPrice:{
        fontSize:18,
        color:'black',
        alignSelf:'center',
        marginLeft:20,
        textDecorationLine:'line-through'
    },

    discountPrice:{
        fontSize:18,
        color:'green',
        alignSelf:'center',
        marginLeft:20
    },

    authorContainer:{
        flex:1,
        flexDirection:'row-reverse',
    },

    authorName:{
        fontSize:18,
        color:'black',
        alignSelf:'center',
        marginLeft:20,
        marginEnd:20
    }
})

export default HomeItemStyles