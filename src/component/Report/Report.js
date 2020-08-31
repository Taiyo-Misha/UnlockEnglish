import React from 'react';
import {SafeAreaView,Text,Image,Dimensions,TouchableOpacity,StyleSheet, View, FlatList} from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from './ReportStyle'

export default class Report extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList 
                        data={DATA}
                        renderItem={({item}) => (
                            <TouchableOpacity >
                                <View style={styles.panel}>
                                    <Image style={styles.imageB} source={item.image} />
                                    <Text style={styles.titleStyle}>{item.title} </Text>
                                </View>
                                <View style={styles.panelB}>
                                    <Text style={styles.infoStyle}>{item.info}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const DATA = [
    {
      image: require('../../../assets/img/1.jpg'),
      title: 'Đổi lịch học',
      info: 'Lịch học sáng mai sẽ chuyển vào ... .',
      
    },
    {
      image: require('../../../assets/img/2.jpeg'),
      title: 'Đóng học',
      info: 'Chúng ta chuẩn bị vào học kỳ mới ....',
      
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: '3 Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      
    },
    {
      image: require('../../../assets/img/3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
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