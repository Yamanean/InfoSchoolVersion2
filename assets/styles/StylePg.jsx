import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1, 
      width: '100%', 
      height: 'auto',     
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#ffffff'
  
    },
    textContent: {
      padding: 15,
      borderRadius: 10, // Adicionando bordas arredondadas
      backgroundColor: '#f5f5dc', // 
      display: 'flex',
      alignItems: "center",
      marginTop: -100,
  
    },
    text: {
      color: '#000000', // Definindo a cor do texto para preto
      fontSize: 14.5,
      fontWeight: 'bold', // Ajustando a espessura da fonte
  
    },
    buttongo: {
      backgroundColor: "#E94949",
      padding: 5,
      borderRadius: 30,
      marginTop: 10,
      width: 150,
      alignItems: "center",
      elevation: 10,
    },
    TextLink: {
      color: '#FFFFFF', // Definindo a cor do texto para preto
      fontSize: 15,
      fontWeight: 'bold', // Ajustando a espessura da fonte
    }
  });
  

  export default styles;