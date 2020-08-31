import React from 'react';
import {TextInput ,StyleSheet,TouchableOpacity,View,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
            placeholder="Tìm kiếm"
            style={stylesSearchContact.inputSearch}
        />
    );
}

export default class SearchContact extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            searchValue:""
        };
    }
    render(){
        return(
            <View style={stylesSearchContact.container}>
                <TouchableOpacity 
                    style={stylesSearchContact.buttonSearch}
                    onPress={this.props.handlSearchContact.bind(this,this.state.searchValue)}
                >
                    <Icon
                        name="search" 
                        color={constValue.iconSearch.color} 
                        size={constValue.iconSearch.size} 
                    />
                </TouchableOpacity>
                <UselessTextInput
                    onChangeText={text => this.setState({searchValue:text})}
                    value={this.state.searchValue}
                />
            </View>
        );
    }
}

const constValue = {
    container_height:scaleSizeScreen(60,height,1),
    iconSearch:{
        size:scaleSizeScreen(26,width),
        color:"#3e4a90"
    },
    inputText:{
        maxLength: 20
    }
}


const stylesSearchContact = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: scaleSizeScreen(59,height,1),
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    buttonSearch:{
        marginLeft: scaleSizeScreen(10,width),
        width:scaleSizeScreen(35,width)
    },
    inputSearch:{
        width:width-50,
        fontSize:scaleSizeScreen(16,width)
    }
});