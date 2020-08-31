import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },
    image:{
        alignSelf: 'center',
        width: 350,
        height: 200,
        borderRadius: 5,
    },
    imageB:{
        alignSelf: 'flex-start',
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    panel:{
        width: 350,
        height: 40,
        flexDirection:'row',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    panelB:{
        width: 330,
        height: 80,
        flexDirection:'column',
        alignItems: 'flex-start',
        marginLeft: 40,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1.0
    },
    titleStyle:{
        marginTop: 5,
        marginStart: 12,
        marginEnd: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoStyle:{
        width: 350,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 14,
    },
    infoStyleB:{
        width: 350,
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 12,
    },
});

export default styles