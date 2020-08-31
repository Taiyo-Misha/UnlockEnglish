import React from 'react';
import {SafeAreaView,Text,Image,Dimensions,TouchableOpacity,StyleSheet, View, FlatList} from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from './NewsStyle'

export default class News extends React.Component{
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
                <View>
                    <FlatList 
                    // data={people}
                    // renderItem={({item}) => (
                    //     <Text>{item.name}</Text>
                    // )}
                    data={DATA}
                    renderItem={({item}) => (
                        
                    <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Screen_NewsDetail') } >
                        {item.onTop ?
                        <View style={styles.panel}>
                            <Image style={styles.image} source={item.image} />
                            <Text style={styles.titleStyle}>{item.title} </Text>
                            <Text style={styles.infoStyle}> {item.info} </Text>
                        </View>
                        :
                        <View style={styles.panelB}>
                            <Image style={styles.imageB} source={item.image} />
                            <Text style={styles.infoStyleB}> {item.title} </Text>
                        </View>
                        }
                    </TouchableOpacity>
                    )}
                    //keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const DATA = [
    {
      image: require('../../../assets/img/1.jpg'),
      title: 'First Title',
      info: '1Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: true,
    },
    {
      image: require('../../../assets/img/2.jpeg'),
      title: 'Second Title',
      info: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: 'Fourth Title',
      info: '4Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: 'Fifth Title',
      info: '5Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
];
// const Item = ({ title, info }) => (
//     <View style={styles.item}>
//       <Text style={styles.titleStyle}>{title}</Text>
//       <Text style={styles.titleStyle}>{info}</Text>
//     </View>
//   );

// const renderTitle = ({ item }) => (
//     <Item title={item.title} />  
// );
// const renderInfo = ({ item }) => (
//     <Item info={item.info} />  
// );