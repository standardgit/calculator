import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      
    },
    calculationText: {
      fontSize: 40,
      color: 'black',
    },
    btntext: {
      fontSize: 30,
      color: 'white',
    },
    white: {
      color: 'white',
    },
    resultText: {
      fontSize: 40,
      color: 'black', 
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch'
    },
  
    row: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    result: {
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
      fontSize: 40,
    },
    calculations: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    buttons: {
      flex: 7,
      flexDirection: 'row',
      color: 'blue'
    },
    numbers: {
      flex: 3,
      backgroundColor: '#434343',
    },
    operations: {
      flex: 1,
      backgroundColor: "#636363",
      justifyContent: 'space-around',
      alignItems: 'center',
      }
  });
  