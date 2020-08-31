import React from 'react';
import {Dimensions,SafeAreaView,Text,View,StyleSheet,ScrollView, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

class RowInfomation extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <TouchableOpacity style={stylesRowInfomation.container}>
                <Text style={stylesRowInfomation.field}>
                    {this.props.field}
                </Text>
                <Text style={stylesRowInfomation.text}>
                    {this.props.value}
                </Text>
            </TouchableOpacity>
        )
    }
}

const stylesRowInfomation = new StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        marginBottom:3,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: 57

    },
    field:{
        color:'#A7A7A7',
        fontSize:14
    },
    text:{
        fontWeight:'900',
        fontSize:14
    }
})



export default class DetailAccount extends React.Component{
    constructor(props)
    {
        super(props);
        this.listInfo={
            main:[
                {
                    field:"Tên hiển thị",
                    value:"Ngô Thị Nhung"
                },
                {
                    field:"Số điện thoại",
                    value:"0334123456"
                },
            ],
            other: [
                {
                    field:"Số CMND/CCCD/Hộ chiếu",
                    value:"0334123456"
                },
                {
                    field:"Ngày sinh",
                    value:"31/8/1997"
                },
                {
                    field:"Email",
                    value:"ngonhung@gmail.com"
                },
                {
                    field:"Giới tính",
                    value:"Nu"
                },
                {
                    field:"Địa chỉ",
                    value:"Sóc sơn, Hà nội"
                }
            ]
        }
    }

    hrefScrren(nameScreen){
        this.props.navigation.navigate(nameScreen)
    }

    render(){
        console.log(width, height);
        return(
            <SafeAreaView style={stylesDetailAccount.container}>
                <View style={stylesDetailAccount.pageBar}>
                    <TouchableOpacity 
                        style={stylesDetailAccount.backBtn}
                        onPress={this.hrefScrren.bind(this,'Screen_Account')}
                    >
                        <Icon
                            name="angle-left"
                            color='#fff'
                            size={stylesDetailAccount.pageBarText.fontSize}
                        />
                    </TouchableOpacity>
                    <Text style={stylesDetailAccount.pageBarText}>
                        Tài khoản của tôi
                    </Text>
                </View>
                <ScrollView style={stylesDetailAccount.content}>
                    <View style={stylesDetailAccount.GroupInfomation}>
                        {this.listInfo.main.map((info,index)=>{
                            return(
                                <RowInfomation
                                    key={index}
                                    field={info.field}
                                    value={info.value}
                                />
                            )
                        })}
                    </View>
                    <View style={stylesDetailAccount.GroupInfomation}>
                        {this.listInfo.other.map((info,index)=>{
                            return(
                                <RowInfomation
                                    key={index}
                                    field={info.field}
                                    value={info.value}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
                
            </SafeAreaView>
        );
    }
}

const constValue = {
    largeAvatar:48,
    px_global: 19,
    py_global:15,
    iconAngle:{
        color:"#3e4a90",
        size:25
    },
    backIcon:{
        color:"#ffffff",
        size:30
    }
}

const stylesDetailAccount = StyleSheet.create({
    backContainer:{

    },
    pageBar:{
        backgroundColor:'#3e4a90',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10,
        marginBottom:5,
    },
    backBtn:{
        position: "absolute",
        left: 10,
        bottom: 13
    },
    pageBarText:{
        fontSize:20,
        color:'#ffffff',
        
    },
    container: {
        backgroundColor:'#f8f8f8'
    },
    GroupInfomation:{
        marginBottom: 20
    }
});