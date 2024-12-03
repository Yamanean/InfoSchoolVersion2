import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    textContent: {
      padding: 20, //delimitando margens da tela
      borderRadius: 30, // Adicionando bordas arredondadas
      backgroundColor: 'red', // cor de fundo do conteúdo
      display: 'flex', 
      alignItems: "center",
      marginTop: 10,
  
    },
    text: {
      color: '#ffffff', // Definindo a cor do texto para preto
      fontSize: 25,
      fontWeight: 'bold', // Ajustando a espessura da fonte

    },
      image: {
        width: 350,
        height: 350,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 30,

    },    
  });
  

  export default styles;