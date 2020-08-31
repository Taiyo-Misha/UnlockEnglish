import {StyleSheet, Dimensions } from 'react-native'

const DEFAUT_COLOR_BLUE = '#3e4a90';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    headerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 23,
        marginHorizontal: 14,
    },
    btnSupport: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtSupport: {
        fontSize: 16,
        marginLeft: 8,
        color: DEFAUT_COLOR_BLUE,
    },
    txtCurrentLanguage: {
        position: 'absolute',
        right: 10,
        color: 'white',
        fontSize: 14,
    },
    content: {
        position: 'absolute',
        height: height,
        width: width - 120,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 60,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formInput: {
        backgroundColor: 'white',
        padding: 13,
        marginTop: 25,
        borderRadius: 5,
    },
    logo: {
        width: width - 162,
        height: (97 * (width - 162)) / 251,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,
    },
    icon: {
        position: 'absolute',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f9f9f9',
        flex: 1,
        paddingLeft: 30,
        fontSize: 16,
    },
    passWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnLogin: {
        borderRadius: 20,
        backgroundColor: DEFAUT_COLOR_BLUE,
        paddingVertical: 13,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 18,
    },
    txtForgotPass: { fontSize: 14, color: DEFAUT_COLOR_BLUE },
    txtWrong: {
        color: '#C81C1F',
        fontSize: 13,
        marginVertical: 12,
        textAlign: 'center',
    },
    modalCall: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    viewImgCall: {
        width: 65,
        height: 65,
        borderRadius: 65,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -32,
    },
    contentCall: {
        backgroundColor: DEFAUT_COLOR_BLUE,
        width: width - 54,
        paddingHorizontal: 27,
        paddingTop: 52,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtNumber: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
    },
    txtbtnCall: {
        color: '#000',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '900',
    },
    btnModalCall: {
        width: width / 3.5,
        paddingVertical: 7,
        backgroundColor: 'white',
        borderRadius: 20,
        color: '#000',
        marginTop: 17,
        marginBottom: 27,
    },
});

export default styles