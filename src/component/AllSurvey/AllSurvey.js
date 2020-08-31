import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  inputStyle: {
    left: 15,
    width: '70%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    backgroundColor: '#ffffff',
  },
  submit: {
    height: 40,
    width: '12%',
    backgroundColor: 'white',
    borderRadius: 200,
    borderWidth: 0.3,
    borderColor: 'black',
    left: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'center',
    borderRadius: 500,
  },
  card: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  insideCard: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  stars: {
    height: 45,
    width: 80,
    resizeMode: 'stretch',
    position: 'absolute',
    right: '18%',
    top: -13,
  },
  btnIcon: {
    height: 40,
    width: '12%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
  },
});
const AllSurvey = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      name: 'Hiền Moon',
      content:
        'Tôi rất tự hào khi cho con chúng tôi học tại trung tâm này. Cảm ơn thầy/ cô rất nhiều.Tôi rất tự hào khi cho con chúng tôi học tại trung tâm này. Cảm ơn thầy/ cô rất nhiều.Tôi rất tự hào khi cho con chúng tôi học tại trung tâm này. Cảm ơn thầy/ cô rất nhiều',
      img: {
        uri:
          'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg',
      },
    },
    {
      id: '2',
      name: 'Đức Dương',
      content:
        'Cảm ơn cô giáo đã dạy nhiệt tình. Con tôi đã khá tiếng Anh lên rất nhiều.',
      img: {
        uri:
          'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_03_24_180_34433121/259994219c62753c2c73.jpg',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.card} elevation={10}>
            <View style={styles.insideCard}>
              <Image source={item.img} style={styles.image}></Image>
              <View style={{flexDirection: 'column', marginLeft: 5}}>
                <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                  <Image
                    source={require('./../Survey/fivestars.png')}
                    style={styles.stars}></Image>
                </View>
                <Text
                  style={{
                    // position: 'relative',
                    marginRight: 50,
                  }}>
                  {item.content}
                </Text>
              </View>
            </View>
            <View style={styles.insideCard}>
              <TouchableHighlight style={styles.btnIcon} underlayColor="#fff">
                <Icon
                  name="smile-o"
                  color="black"
                  size={30}
                  style={{
                    left: 8,
                    top: 4,
                  }}
                />
              </TouchableHighlight>
              <TextInput style={styles.inputStyle} />
              <TouchableHighlight style={styles.submit} underlayColor="#fff">
                <Icon
                  name="location-arrow"
                  color="#3b5998"
                  size={30}
                  style={{
                    left: 8,
                    top: 4,
                  }}
                />
              </TouchableHighlight>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default AllSurvey;
