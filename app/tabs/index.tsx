import { StyleSheet, Text, View } from 'react-native';

import { Image } from 'expo-image';
import { Link } from 'expo-router';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
    <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={styles.text}>Home screen</Text>
      <Link href="./about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
