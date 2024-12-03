import { SafeAreaView, Text, Pressable, Linking } from 'react-native';
import styles from '../assets/styles/StyleCtt'



export default function Contatos() {

  const phoneNumber = '4163-4655';
  const InstaUrl = `tel:${phoneNumber}`;
  const PhoneUrl = 'https://www.instagram.com/etecantoniofurlan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const WppUrl = 'https://api.whatsapp.com/send?phone=551141634659'

  return (
    <SafeAreaView style={styles.container}>

      <Pressable style={styles.phonebutton}

        onPress={() => Linking.openURL(PhoneUrl)}>

        <Text style={styles.title}>Instagram</Text>

      </Pressable>

      <Pressable style={styles.instabutton}

        onPress={() => Linking.openURL(InstaUrl)}>

        <Text style={styles.title1}>Telefone</Text>

      </Pressable>

      <Pressable style={styles.wppbutton}

onPress={() => Linking.openURL(WppUrl)}>

<Text style={styles.title2}>Whatsapp</Text>

</Pressable>


    </SafeAreaView>
  );
}



