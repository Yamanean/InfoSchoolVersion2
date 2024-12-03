import { Text, View, SafeAreaView, ImageBackground, Pressable } from "react-native";
import { Link } from 'expo-router';
import styles from '../assets/styles/StylePg';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/Infoschool.png')} // 
        style={styles.imageBackground}
      >
        <View style={styles.textContent}>

        <Text style={styles.text}>
          Olá! Você está no Informativo Escolar.
        </Text>


  </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

