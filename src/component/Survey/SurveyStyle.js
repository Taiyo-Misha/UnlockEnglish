import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      marginTop: -30,
      height: '40%',
    },
    card: {
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: 50,
      backgroundColor: 'white',
      borderRadius: 15,
    },
    insideCard: {
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
  });

export default styles