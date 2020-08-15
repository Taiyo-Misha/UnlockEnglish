import React from 'react';
import {SafeAreaView,Text,Dimensions,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class ForgotPassword extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#ffffff'}}>
                <Text>
                    ForgotPassword
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text style={{color:'blue'}}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}