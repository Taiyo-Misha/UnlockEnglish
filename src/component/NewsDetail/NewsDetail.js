import React from 'react';
import {SafeAreaView,View,Image, Text,Dimensions,TouchableOpacity,StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from './NewsDetailStyle'

export default class NewDetail extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.paddingArea}>
                    <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.goBack()}>
                            <Text style={styles.titleStyle}>BACK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.titleStyle}>BẢN TIN</Text>
                    </View>
                    <View>
                        <Text style={{color: '#FFFFFF00'}}>BACK</Text>
                    </View>
                </View>
                <View style={styles.news}>
                    <Image style={styles.image} source={require('../../../assets/img/2.jpeg')} ></Image>
                    <Text style={styles.titleStyle}>Title 1</Text>
                    <Text style={styles.infoStyle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}