import {View,ScrollView} from 'react-native'
import React , {useState, useEffect} from 'react'
import Item from './Item'
import LoadingScreen from '../utils/Loading'

const Home = ({navigation}) => {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const gotoDetails = (name) => {
        navigation.navigate('Details',{
            username: name
        })
    }

    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
          .then((response) => response.json()) // get response, convert to json
          .then((json) => {
            setData(json.entries);
          })
          .catch((error) => alert(error)) // display errors
          .finally(() => setLoading(false)); // change loading state
      }, []);

    return(
        <View style={{flex:1, alignSelf:'stretch'}}>
            {
                isLoading ? (
                    <LoadingScreen></LoadingScreen>
                ) : (
                    <ScrollView>
                        {
                            data.map((item) => (
                                <Item value={item} gotoDetails = {gotoDetails}
                                ></Item>
                            ))
                            
                        }
                    </ScrollView>
                )
            }
            
        </View>
    )
}


export default Home