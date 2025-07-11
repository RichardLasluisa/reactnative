import { Link } from "expo-router";
import { ScrollView, View } from "react-native-web";
import { StyleSheet } from "react-native";
import { Text } from "react-native-web";

export default function About() {
    return (
        <ScrollView>
            <View>
                <Text>
                    Hola Mundo
                </Text>
                <Link href="/" style={styles.title}>
                    <Text>Volver al inicio</Text>
                </Link>
            </View>
        </ScrollView>
    );

};

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



