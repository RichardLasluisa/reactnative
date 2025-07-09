import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { icon } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Hola Mundo</Text>
      <Image style={styles.image} source={icon}></Image>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Pulsame" color="#841584"/>
        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 100, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 430,
    height: 294,
    borderRadius: 10,
    marginBottom: 20,
  },


});
