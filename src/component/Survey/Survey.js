import React, {useState} from 'react';
import { SafeAreaView, Text, Dimensions, TouchableHighlight, View, TextInput,
  StyleSheet, Alert, ImageBackground, Image, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SurveyStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Survey = ({navigation}) => {
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
        'Cảm ơn cô giáo đã dạy nhiệt tình. Con tôi đã khá tiếng Anh lên rất nhiều.Tôi rất tự hào khi cho con chúng tôi học tại trung tâm này. Cảm ơn thầy/ cô rất nhiều.Tôi rất tự hào khi cho con chúng tôi học tại trung tâm này. Cảm ơn thầy/ cô rất nhiều',
      img: {
        uri:
          'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_03_24_180_34433121/259994219c62753c2c73.jpg',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://portal.ptit.edu.vn/wp-content/uploads/2015/12/banner-fb.png',
        }}
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.card} elevation={10}>
          <View style={styles.insideCard}>
            <Image
              source={require('./UnlockEnglish_Img.jpg')}
              style={{
                height: 50,
                width: '30%',
                resizeMode: 'stretch',
              }}></Image>
            <Image
              source={require('./fivestars.png')}
              style={{
                height: 60,
                width: '40%',
                resizeMode: 'center',
                position: 'absolute',
                right: 0,
              }}>
              </Image>
          </View>
          <View style={styles.insideCard}>
            <Icon name="map-marker" color="#3b5998" size={30} />
            <Text
              style={{
                marginLeft: 20,
                marginTop: 7,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Xóm 1 - Bát Tràng
            </Text>
          </View>
          <View style={styles.insideCard}>
            <Icon name="phone" color="#3b5998" size={30} />
            <Text
              style={{
                marginLeft: 20,
                marginTop: 7,
                color: 'black',
                fontWeight: 'bold',
              }}>
              0988.888.999
            </Text>
          </View>
          <View style={styles.insideCard}>
            <Text style={{ color: 'black', }}>
              Với hơn 10 năm giảng dạy tiếng Anh và tham gia công tác hợp tác
              quốc tế của một trường đại học, tôi hiểu tiếng Anh có vai trò như
              thế nào trong việc hình thành kỹ năng và tư duy của người học ngay
              từ đầu...
            </Text>
          </View>
          <View style={styles.insideCard}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Đánh giá
            </Text>
            <TouchableHighlight
              style={{
                resizeMode: 'center',
                position: 'absolute',
                right: 0,
              }}
              onPress={() => {
                navigation.navigate('Screen_AllSurvey');
              }}>
              <Text
                style={{
                  color: '#3b5998',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Xem tất cả
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.insideCard}>
            <FlatList
              style={{height: 120}}
              data={DATA}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={item.img}
                    style={{
                      height: 30,
                      width: 50,
                      resizeMode: 'center',
                      borderRadius: 500,
                    }}></Image>
                  <View style={{flexDirection: 'column', marginLeft: 5}}>
                    <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
                      <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                      <Image
                        source={require('./fivestars.png')}
                        style={{
                          height: 40,
                          width: 80,
                          // marginLeft: 100,
                          // marginTop: -50,
                          resizeMode: 'stretch',
                          position: 'absolute',
                          right: 50,
                          top: -13,
                        }}></Image>
                    </View>
                    <Text
                      style={{flex: 1, marginRight: 50}}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.content}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Survey;
