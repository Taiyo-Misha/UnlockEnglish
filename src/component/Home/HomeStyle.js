import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerArea: {
        backgroundColor: "#3e4a90",
        flex:3,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    HoTroArea:{
        flexDirection: 'row'
    },
    HoTroText: {
        color: '#ffffff',
        fontSize: 26
    },
    ProfileBtnPic: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    banTinCaNhan: {
        flex: 4,
        backgroundColor: '#ffffff',
        marginTop: -70,
        marginHorizontal: 35,
        borderRadius: 20, 
        padding: 20,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 30
    },
    banTinCaNhanText: {
        fontSize: 20,
        color:"#666",
        margin: 3
    },
    banTinList:{
        flex: 1,
        paddingHorizontal: 3,
        paddingVertical: 5,
        
    },
    buttonNavArea: {
        flex: 2,
        flexDirection: 'row',
        padding: 6,
        justifyContent: 'space-evenly'
    }, 
    btnNavArea: {
        alignItems: 'center',
        flexDirection: 'column', 
        flexWrap: 'wrap'
    },
    btnNavAreaText: {
        fontSize: 15,
        marginTop: 5
    },
    banTinArea: {
        flex:6,
        paddingHorizontal: 38
        // flexDirection: 'row'
    },
    banTinTextArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1
    },
    btnBanTinAllText:{
        color: '#3e4a90',
        fontSize: 17,
        fontWeight: '600'
    },
    bigPic: {
        width: 200,
        height: 115,
        borderRadius: 8
    },
    allBanTinList: {
        flex:7,
    },
    allBanTinItem: {
        flex:1, 
        flexDirection: 'column', 
        marginVertical: 3, 
        borderRadius: 10, 
        borderColor: '#aaa',
        borderWidth: 1,
        marginHorizontal: 7,
    }

});

export default styles