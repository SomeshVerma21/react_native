import {StyleSheet} from 'react-native'

const shapeStyle = StyleSheet.create({
    card: {
        height:400,
        width:350,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding:20,
        backgroundColor: '#348a73',
        borderRadius: 10
      },
    circular:{
        borderRadius:50,
        height:100,
        width:100,
        backgroundColor:'#FF9800'
    }
})

export default shapeStyle