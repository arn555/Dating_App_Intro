  import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';

  function Parent() {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/img/homebackground.png')} >

      <TouchableOpacity 
      onPress={() => Linking.openURL('https://1stchoicedating.com/')} >
          <Image
            style={{ marginTop: 68, width: 242, height: '26%'}}
            source={require('../../assets/img/logo.png')}
            
          />
      </TouchableOpacity>
        

        
        <View style={styles.box4}>
              <View style={styles.box3}>
                  <View style={styles.box2}>
                    <View style={styles.box1}>
      
                    <View style={styles.messageBox1}>
                    <Text style={styles.messageBoxText1} > When you're comfortable enought with the Sim, you can send express mail and really get the conversation started! </Text>
                    </View>
                    

                    </View>
                </View>
              </View>
        </View>





        <TouchableOpacity 
              style={{flex:1, alignContent: 'center', 
              justifyContent: 'center', 
              flexDirection: 'column',
              
              }}

              >
      
              
                <View style={{marginBottom: 5}}>
                <View style={{
                  alignContent: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: '#12B9F6', 
                  paddingTop: 12,
                  paddingLeft: 27,
                  paddingRight: 27,
                  paddingBottom: 12,
                  borderRadius: 50                
                  }}>
                <Text style={{
                  textAlign: 'center', 
                  color: 'white', 
                  fontSize: 15.7,
                  fontWeight: '400' }}>START THE CONVERSATION</Text>
                </View>
                </View>
                
                
                
                
                
                
              </TouchableOpacity>



      </ImageBackground>
    );
  }

  export default Parent;

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: '100%',
        maxWidth: '100%',
      },
      box4: {
        marginLeft: 80,
        marginRight: 80,
        marginTop: 200,
        borderColor: 'white',
        borderWidth:1.7,
        borderRadius: 2
      },
      box3: {
        borderColor: '#89CFF0',
        borderWidth:2.2,
        borderRadius: 2
      },
      box2: {
        borderColor: 'white',
        borderWidth:2.4,
        borderRadius: 2
      },
      box1: {
        borderColor: '#89CFF0',
        borderRadius: 2,
        borderWidth: 2.2,
        paddingTop: 15,
        paddingBottom:15,
      },
      messageBox1: {
        paddingLeft: 8,
        paddingRight: 8,
      },  
      messageBoxText1: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center'
      },
      
    });
    