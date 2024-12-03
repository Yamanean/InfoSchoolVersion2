import { SafeAreaView, Text, View, Image, Button } from 'react-native';
import styles from '../assets/styles/StyleWarn';
import Toast from 'react-native-toast-message'

const showToast = () => {
Toast.show ({
  text1: 'Observe suas Notas',
  text2: 'Suas notas estão vermelhas',
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
        <Button title="Mostrar Mensagem" onPress={showToast}
/>
        <Toast ref={(ref)  => Toast.setRef(ref)} />
      </View>

      <Image src={require('../assets/images/Boletim.png')} // 
        style={styles.image}
      />
    </SafeAreaView>
  );
};