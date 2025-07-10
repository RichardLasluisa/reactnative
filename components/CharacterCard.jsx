import { StyleSheet, Text, View, Image} from 'react-native';
export function CharacterCard({ personaje }) {
    return (
              <View style= {styles.card} key={personaje.id}>
                  <Image style= {styles.card} source={{ uri: personaje.image}}></Image>
                  <Text style= {styles.title}>Nombre:{personaje.name}</Text>
                  <Text style= {styles.species}>Especie:{personaje.species}</Text>
                  <Text style= {styles.status}>Estado:{personaje.status}</Text>
                  <Text style= {styles.gender}>Genero:{personaje.gender}</Text>
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
