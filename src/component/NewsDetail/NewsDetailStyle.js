import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },
    paddingArea: {
        height: 50,
        width: '100%',
        backgroundColor: '#3e4a90',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    news:{
        marginTop: 25,
    },
    image:{
        alignSelf: 'center',
        width: 380,
        height: 250,
        borderRadius: 5,
    },
    panel:{
        width: 350,
        flexDirection:'column',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    titleStyle:{
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    infoStyle:{
        width: 350,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 12,
    },
});

export default styles