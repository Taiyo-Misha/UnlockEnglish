import React from 'react';
import {SafeAreaView,Text,Dimensions,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class DashBoard extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:0.1*width}}>
                    DashBoard
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_ForgotPassword")}>
                    <Text style={{color:'blue'}}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_Login")}>
                    <Text style={{color:'blue'}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}