import React from 'react';
import {SafeAreaView,Text,Dimensions,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#ffffff'}}>
                <Text>
                    Login
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_ForgotPassword")}>
                    <Text style={{color:'blue'}}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}