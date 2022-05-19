import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios'

const api = axios.create({
  
  baseURL: 'http://172.0.0.1:19000',

})

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const fetchData = async () => {
    console.log('Fetching...')
    await api({url:'/test-fetch-api'}).then(res=>{
      console.log('Success!')
      console.log(res)
      console.log('Fetching...2')
    },err=> console.log(err))
  }
  useEffect(()=>{ 
    console.log('\x1b[36m%s\x1b[0m', 'This is tab one render');  //cyan
    // console.log('\x1b[33m%s\x1b[0m', 'stringToMakeYellow');  //yellow
    fetchData()

  },[])
  return (
    <View style={styles.container}>

      
      <Text style={styles.title}>This is the first tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
