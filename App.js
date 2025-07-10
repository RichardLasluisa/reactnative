import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { icon } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { useEffect, useState } from 'react';
import Logo from './components/logo';
import { ScrollView } from 'react-native-web';
import { CharacterCard } from './components/CharacterCard';


export default function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(()=> {
    getPersonajes().then((data)=>{
      setPersonajes(data);
      console.log("personajes:", data);
    })
  }, []);
  

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo style={styles.logo}/>
      <ScrollView>
      { personajes.map((personaje) => (
        <CharacterCard personaje={personaje}></CharacterCard> 
      ))}
      </ScrollView>
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
    width: 30,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%' ,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  species: {
    fontSize: 16,
    colot: '#fff',
  },
  status: {
    fontSize: 16,
    color: '#33caff',
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    color: '#fff',
  }
});
