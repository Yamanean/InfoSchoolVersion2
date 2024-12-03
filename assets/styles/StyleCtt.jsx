import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    phonebutton: {
      padding: 20,
      borderRadius: 40, // Adicionando bordas arredondadas
      backgroundColor: '#99ccff', // 
      display: 'flex',
      alignItems: "center",
      marginTop: -100,
    },
  
    title: {
      fontWeight: 'bold'
    },
  
    instabutton: {
      padding: 20,
      borderRadius: 40, // Adicionando bordas arredondadas
      backgroundColor: '#f25f55', // 
      display: 'flex',
      alignItems: "center",
      marginTop: -200,
    },
    title1: {
      fontWeight: 'bold'
    },
  
    wppbutton: {
      padding: 20,
      borderRadius: 40, // Adicionando bordas arredondadas
      backgroundColor: '#f2e555', // 
      display: 'flex',
      alignItems: "center",
      marginTop: -200,
      fontWeight: 'bold'
    },
    
    title2: {
      fontWeight: 'bold'
    }
  });
  

  export default styles