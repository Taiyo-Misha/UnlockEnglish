import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

export default class Safe extends Component {
    constructor(props) {
        super(props)
    }
    
    hrefScrren(nameScreen){
        this.props.navigation.navigate(nameScreen)
    }

    render() {
        return (
            <TouchableOpacity
                style={stylesSafe.container}
                onPress={this.hrefScrren.bind(this,this.props.linkTo)}
            >
                <View style={stylesSafe.icon}>
                    {this.props.lib===undefined?
                        <Icon
                            name={this.props.iconName}
                            color={constValue.iconLeft.color}
                            size= {constValue.iconLeft.size}
                        />
                    : this.props.lib==="fontisto"?
                        <IconF
                            name={this.props.iconName}
                            color={constValue.iconLeft.color}
                            size= {constValue.iconLeft.size}
                        />
                    : 
                        <IconM
                            name={this.props.iconName}
                            color={constValue.iconLeft.color}
                            size= {constValue.iconLeft.size}
                        />

                    } 
                </View>

                <Text style={stylesSafe.text}>
                    {this.props.text}
                </Text>

                <TouchableOpacity 
                    style={stylesSafe.iconAngle}
                    onPress={this.hrefScrren.bind(this,this.props.linkTo)}
                >
                    <Icon
                        name="angle-right"
                        color={constValue.iconAngle.color}
                        size= {constValue.iconAngle.size}
                    />
                </TouchableOpacity> 
                
                
            </TouchableOpacity>
        )
    }
}

const constValue = {
    largeAvatar:scaleSizeScreen(48,width),
    px_global: scaleSizeScreen(18,width),
    py_global:scaleSizeScreen(15,height,1),
    iconAngle:{
        color:"#3e4a90",
        size:scaleSizeScreen(25,width)
    },
    iconLeft:{
        color:"#3e4a90",
        size:scaleSizeScreen(25,width)
    }
}

const stylesSafe = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        alignItems:'center',
        borderRadius:5,
        marginBottom: 3,
        paddingLeft: constValue.px_global,
        paddingRight: constValue.px_global,
        paddingTop:15,
        paddingBottom:15,
    },
    icon:{
        width:constValue.iconLeft.size,
    },
    text:{
        marginLeft:constValue.py_global
    },
    iconAngle:{
        marginLeft:'auto',
    }
})