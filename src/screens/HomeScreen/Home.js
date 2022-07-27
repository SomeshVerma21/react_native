import {View,Text,ScrollView} from 'react-native'
import React , {useState} from 'react'
import Item from './Item'
import ItemData from '../../component/constant/data'

const Home = ({navigation}) => {
    const items = ItemData
    
    const [names , setNames] = 
    useState([{'name': null, 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ])

    const gotoDetails = (name) => {
        navigation.navigate('Details',{
            username: name
        })
    }
    
    return(
        <View style={{flex:1, alignSelf:'stretch'}}>
            <ScrollView>
            {
                items.map((item) => (
                    <Item value={item} gotoDetails = {gotoDetails}
                    ></Item>
                ))
            }
            </ScrollView>
        </View>
    )
}


export default Home