import { SafeAreaView, Text, View, Image, Button } from 'react-native';
import styles from '../assets/styles/StyleWarn';
import Toast from 'react-native-toast-message'

const showToast = () => {
Toast.show ({
  text1: 'title toast',
  text2: 'message toast',
  visibilityTime: 3000,
  position: 'bottom',
  type: 'success', 

});
};

export default function Avisos() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.textContent}>

        <Text style={styles.text}>
          ATENÇÃO!
        </Text>
        <Button title="Mostrar Toast" onPress={showToast}
/>
        <Toast ref={(ref)  => Toast.setRef(ref)} />
      </View>

      <Image source={require('../assets/images/atual.jpeg')} // 
        style={styles.image}
      />
    </SafeAreaView>
  );
}