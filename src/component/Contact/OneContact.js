import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

export default class OneContact extends Component {
    handlOpenPhoneCalling(phoneNumber){
        Linking.openURL(`tel:${phoneNumber}`)
    }
    render() {
        console.log(this.props.avatarLink);
        return (
            <View style={stylesOneContact.container}>
                <Image
                    style={stylesOneContact.avatar}
                    source={this.props.avatarLink? {uri: this.props.avatarLink} : require('./modal/emptyAvatar.png')}
                />

                <View style={stylesOneContact.info}>
                    <Text style={stylesOneContact.name}>
                        {this.props.name}
                    </Text>
                    <Text style={stylesOneContact.note}>
                        {this.props.note}
                    </Text>
                </View>

                <TouchableOpacity 
                    style={stylesOneContact.iconContainer}
                    onPress={this.handlOpenPhoneCalling.bind(this,this.props.phoneNumber)}
                >
                    <Icon
                        name="phone" 
                        color={constValue.iconCall.color} 
                        size={constValue.iconCall.size}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const constValue = {
    px_global: scaleSizeScreen(14,width),
    py_global: scaleSizeScreen(6,height,1),
    largeAvatar: scaleSizeScreen(42,width),
    iconCall:{
        size:scaleSizeScreen(26,width),
        color:'#3e4a90'
    }
}

const stylesOneContact = StyleSheet.create({
    container: {
        height: scaleSizeScreen(63,height,1),
        backgroundColor:'#ffffff',
        paddingTop: constValue.py_global,
        paddingBottom: constValue.py_global,
        paddingLeft: constValue.px_global,
        paddingRight: constValue.px_global,
        flexDirection: 'row',
        alignItems:'center'
    },
    categoryName: {
        marginLeft: constValue.mx_global,
        marginRight: constValue.mx_global,
        marginBottom: constValue.my_global,
        marginTop: constValue.my_global,
    },
    avatar:{
        width: constValue.largeAvatar,
        height: constValue.largeAvatar,
        borderRadius: constValue.largeAvatar/2,
        marginRight: constValue.py_global,
        
    },  
    info:{
        marginLeft: constValue.py_global,
        alignItems: 'flex-start'
    },
    name:{
        fontSize: scaleSizeScreen(16,width),
        fontWeight: 'bold'
    },
    note:{
        fontSize: scaleSizeScreen(13,width)
    },
    iconContainer:{
        justifyContent:'flex-end',
        marginLeft: "auto"
    }

});