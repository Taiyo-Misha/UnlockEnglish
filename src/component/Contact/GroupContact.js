import React from 'react';
import {Text,StyleSheet,View, Dimensions } from 'react-native';
import OneContact from './OneContact'
import {scaleSizeScreen} from '../../common/scaleSizeScreen'
const { width, height } = Dimensions.get('window');

export default class GroupContact extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <View style={stylesGroupContact.container}>
                <Text style={stylesGroupContact.categoryName}>{this.props.firstChar}</Text>
                {this.props.listContact.map((itemContact, index) =>{
                    return(
                        <OneContact
                            key={index}
                            avatarLink={itemContact.avatar}
                            name={itemContact.name}
                            note={itemContact.note}
                            phoneNumber={itemContact.phoneNumber}
                        />
                    )
                })}
                
            </View>
        );
    }
}

const constValue = {
    mx_global: scaleSizeScreen(14,width),
    my_global: scaleSizeScreen(6,height,1),
}


const stylesGroupContact = StyleSheet.create({
    container: {
        borderRadius:5,
        flexDirection: 'column'
    },
    categoryName: {
        marginLeft: constValue.mx_global,
        marginRight: constValue.mx_global,
        marginBottom: constValue.my_global,
        marginTop: constValue.my_global,
    },

});