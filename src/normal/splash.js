
import { useEffect, React } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Splash({navigation}) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent')
    }, 2000)    
  },[]);
  
  return (
    <View style={styles.container}>
   
       <Image
          style={{ marginTop: 25, width: 300, height: '10%'}}
          source={require('../../assets/img/logo.png')}
        />
       
       
       
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#0083CC',
      alignItems: 'center',
      justifyContent: 'center',

    },
  });
  