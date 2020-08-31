import React, {Component} from 'react';
import {View, Dimensions, Image} from 'react-native';
const LOGO_PATH = '../../../assets/Login/Logo.png';

const {width, height} = Dimensions.get('window');
export default class Splash extends Component
{
   constructor(props){
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("Screen_Login");
        },3000);
  }
  render()
  {
    return (
      <View
       style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require(LOGO_PATH)} style={{  
          width: width - 120,
          height: (97 * (width - 120)) / 251
          }} />
      </View>
    );
  }
}