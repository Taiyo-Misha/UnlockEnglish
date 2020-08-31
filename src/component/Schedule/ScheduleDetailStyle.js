import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3e4a90"
    },
    headerCalenderText: {
        textAlign: 'center',
        fontSize: 33,
        color: "#ffffffff"
    },
    calenderStyle: {
        height: 340,
        //backgroundColor: "#ffffff"
    },
    nameScreen: { 
        flex: 1, 
        textAlign: 'center', 
        textAlignVertical: 'center',
        fontSize:25, 
        color: '#ffffff',
        fontFamily:'Courier-Bold' 
    },
    classInfoList: {
        flex: 8,
        //alignItems:'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: '6%'
    },
    classInfoDay: {
        flexDirection: 'row',
        paddingHorizontal: 7
    },
    classInfoDayText: {
        fontSize: 24,
        textAlign: 'left'
    },
    classDescription: {
        flexDirection: 'row',
        marginVertical: 7
    },
    timeAndTeacher: {
        flex: 3,
        padding: 18,
        alignItems: 'center'
    },
    classNameAndType: {
        flex: 4,
        borderRadius: 20,
        backgroundColor: '#efefef',
        padding: 18
    },
    classTextBold: {
        fontSize: 18,
        fontWeight: '500',
        margin: 2
    },
    classTextSlim: {
        fontSize: 16,
        fontWeight: '200'
    }
    
});

export default styles