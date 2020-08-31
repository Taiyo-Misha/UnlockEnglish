import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,ScrollView,Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Safe from './Safe';
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

export default class Account extends React.Component{
    constructor(props)
    {
        super(props);
        this.listSafe=[
            {
                iconName: "list",
                name:"Điều khoản",
                linkTo: "Screen_Home"
            },
            {
                iconName: "question-circle",
                name:"Câu hỏi thường gặp",
                linkTo: "Screen_Home"
            },
            {
                iconName: "mail-reply",
                name:"Liên hệ với chúng tôi",
                linkTo: "Screen_Home"
            },
            {
                iconName: "locked",
                name:"Đổi mật khẩu",
                linkTo: "Screen_CheckOldPassword",
                lib:"fontisto"
            },
            {
                iconName: "logout",
                name:"Đăng xuất",
                linkTo: "Screen_Login",
                lib:"materialCommunityIcons"
            }
        ]
    }

    hrefScrren(nameScreen){
        this.props.navigation.navigate(nameScreen)
    }
    

    render(){
        return(
            <SafeAreaView style={stylesAccount.container}>
                <View style={stylesAccount.pageBar}>
                    <TouchableOpacity 
                        style={stylesAccount.backBtn}
                        onPress={this.hrefScrren.bind(this,'Screen_Home')}
                    >
                        <Icon
                            name="angle-left"
                            color='#fff'
                            size={stylesAccount.pageBarText.fontSize}
                        />
                    </TouchableOpacity>
                    <Text style={stylesAccount.pageBarText}>
                        Tài khoản của tôi
                    </Text>
                </View>
                <ScrollView style={stylesAccount.content}>
                    <TouchableOpacity 
                        style={stylesAccount.me}
                        onPress={this.hrefScrren.bind(this,'Screen_DetailAccount')}
                    >
                        <Image
                            source={ require('../Contact/modal/emptyAvatar.png') }
                            style={stylesAccount.avatarMe}
                        />
                        <View style={stylesAccount.shortInfoMe}>
                            <Text style={stylesAccount.myName}>
                                Ngo Thi Nhung
                            </Text>
                            <Text style={stylesAccount.myPhone}>
                                0334123456
                            </Text>
                        </View>
                        <TouchableOpacity style={stylesAccount.iconAngle}>
                            <Icon
                                name="angle-right"
                                color={constValue.iconAngle.color}
                                size= {constValue.iconAngle.size}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    {this.listSafe.map((safe, index) =>{
                        return(
                            <Safe
                                key={index}
                                iconName={safe.iconName}
                                text={safe.name}
                                linkTo={safe.linkTo}
                                lib={safe.lib}
                                navigation={this.props.navigation}
                            />
                        )
                    })}
                    

                </ScrollView>
                
            </SafeAreaView>
        );
    }
}

const constValue = {
    largeAvatar: scaleSizeScreen(48,width),
    px_global: scaleSizeScreen(19,width),
    py_global: scaleSizeScreen(15,height,1),
    iconAngle:{
        color:"#3e4a90",
        size:scaleSizeScreen(25,width)
    }
}

const stylesAccount = StyleSheet.create({
    pageBar:{
        backgroundColor:'#3e4a90',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:scaleSizeScreen(10,height,1),
        marginBottom:scaleSizeScreen(5,height,1),
    },
    backBtn:{
        position: "absolute",
        left: scaleSizeScreen(10,width),
        bottom: scaleSizeScreen(13,height,1),
    },
    pageBarText:{
        fontSize:scaleSizeScreen(20,width),
        color:'#ffffff',
        
    },
    container: {
        backgroundColor:'#f8f8f8'
    },
    me:{
        marginBottom:scaleSizeScreen(10,height,1),
        paddingTop: constValue.py_global,
        paddingBottom: constValue.py_global,
        paddingLeft: constValue.px_global,
        paddingRight: constValue.px_global,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 9,
    },
    avatarMe:{
        width:constValue.largeAvatar,
        height:constValue.largeAvatar,
        borderRadius: constValue.largeAvatar/2,
    },
    shortInfoMe:{
        marginLeft:constValue.py_global
    },
    myName:{
        fontSize: scaleSizeScreen(13,width),
        fontWeight: 'bold',
        marginBottom: 8
    },
    myPhone:{
        fontSize: scaleSizeScreen(13,width),
        color:"#a7a7a7"
    },
    iconAngle:{
        marginLeft:'auto',
    }
});