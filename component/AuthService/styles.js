
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainScreen:{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'},
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'stretch'
    },
    screenChangeContainer:{
        margin:20,
        justifyContent:'center',
        flexDirection:'row',
      },
    inputField:{
        alignSelf:'stretch',
        borderRadius:5,
        borderWidth:2,
        borderColor:'blue',
        margin:15,
        backgroundColor:'white',
        height:40,

        backfaceVisibility:'visible'
    },
    submitBtn:{
        alignSelf:'stretch',
        backgroundColor:'blue',
        borderRadius:5,
        margin:15,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    submitBtnText:{
        color:'white',
        height:30,
        textAlignVertical:'center'
    },
    clickAbleText:{
        marginStart:20,
        color:'blue',
        textDecorationLine:'underline'
      }
})

export default styles