import React, {Component} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList,
  ScrollView, Dimensions, Button,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ScoreBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key1: '26/08 - 01/09'},
        {key2: '100'},
        {key3: '27/08/2020'},
        {key4: 'Bài tập về nhà'},
      ],
      data1: [{key2: '100'}],
      data2: [{key3: '27/08/2020'}],
      data4: [{key4: 'Bài tập về nhà'}],
      tabsData: [
        {
          tabKey: 'Số điểm',
          content: {
            Jan: {diem1: [8, 9], diem2: [8]},
            Feb: {diem1: [1, 2], diem2: [8]},
            Mar: {diem1: [8, 9], diem2: [8]},
            Apr: {diem1: [8, 9], diem2: [8]},
            May: {diem1: [8, 9], diem2: [8]},
            Jun: {diem1: [8, 9], diem2: [8]},
            Jul: {diem1: [8, 9], diem2: [8]},
            Aug: {diem1: [8, 9], diem2: [8]},
            Sep: {diem1: [8, 9], diem2: [8]},
            Oct: {diem1: [8, 9], diem2: [8]},
            Nov: {diem1: [8, 9], diem2: [8]},
            Dec: {diem1: [8, 9], diem2: [8]},
          },
        },
        {
          tabKey: 'Báo cáo',
          content: {
            2020: {diem1: [9], diem2: [10]},
            2021: {diem1: [11], diem2: [10]},
            2022: {diem1: [4], diem2: [10]},
            2023: {diem1: [5], diem2: [10]},
            2024: {diem1: [6], diem2: [10]},
            2025: {diem1: [9], diem2: [10]},
            2026: {diem1: [9], diem2: [10]},
            2027: {diem1: [6], diem2: [10]},
            2028: {diem1: [9], diem2: [10]},
            2029: {diem1: [9], diem2: [10]},
            2030: {diem1: [9], diem2: [10]},
          },
        },
      ],
      activeTab: 0,
      activeMonth: 'Jan',
      activeYear: 2020,
      count: 0,
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const {count} = this.state;
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#FFF'}}>
        <View style={{height: 40,backgroundColor: '#3E4A90'}}></View>
        <TouchableOpacity
          style={styles.header}
          onPress={() => this.props.navigation.goBack()}>
          <FontAwesome5
            name="angle-left"
            size={25}
            color="#FFF"
            style={{marginLeft: 14}}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Số điểm và báo cáo
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: '#3E4A90'}}>
          <View style={styles.name}>
            <Text
              style={{
                marginLeft: 14,
                fontWeight: 'bold',
                color: '#000',
                fontSize: 20,
              }}>
              Nguyễn Tuấn Linh
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DashBoard')}>
              <Entypo
                name="chevron-small-right"
                size={25}
                color="#3E4A90"
                style={{marginLeft: 14}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: '#3E4A90',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.tabsData.map((item, index) => (
              <TouchableOpacity
                style={{alignItems: 'center'}}
                key={index}
                onPress={() => {
                  this.setState({activeTab: index});
                }}>
                <View
                  style={[
                    {
                      alignItems: 'center',
                      marginHorizontal: 14,
                      justifyContent: 'center',
                      marginTop: 15,
                      marginRight: 50,
                    },
                  ]}>
                  <Text
                    style={{
                      color:
                        this.state.activeTab === index ? '#FFF' : '#8289B7',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {item.tabKey}
                  </Text>
                  <View
                    style={[
                      {height: 10, width: 60, marginTop: -10},
                      this.state.activeTab === index
                        ? styles.activedTab
                        : styles.tab,
                    ]}></View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.header1}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Object.keys(this.state.tabsData[this.state.activeTab].content).map(
              (item, index) => (
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  key={index}
                  onPress={() => {
                    this.setState(
                      this.state.activeTab === 0
                        ? {activeMonth: item}
                        : {activeYear: item},
                    );
                  }}>
                  <View
                    style={[
                      {
                        alignItems: 'center',
                        marginHorizontal: 14,
                        justifyContent: 'center',
                      },
                    ]}>
                    <Text
                      style={[
                        this.state.activeMonth === item ||
                        this.state.activeYear.toString() === item
                          ? {color: '#FFF'}
                          : {color: '#8289B7'},
                        {
                          fontSize: 30,
                          fontWeight: 'bold',
                        },
                      ]}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            position: 'absolute',
            flex: 1,
            top: width - 130,
            backgroundColor: '#FFF',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          {this.state.activeTab === 0 && (
            <>
              <View style={{marginTop: 25}}>
                <View style={styles.label1}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Điểm kiểm tra 15 phút:
                  </Text>
                  {this.state.tabsData[0].content[
                    this.state.activeMonth
                  ].diem1.map((item) => (
                    <Text style={{marginLeft: 14}}>{item}</Text>
                  ))}
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <View style={styles.label1}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Điểm kiểm tra Giữa kỳ:
                  </Text>
                  {this.state.tabsData[0].content[
                    this.state.activeMonth
                  ].diem2.map((item) => (
                    <Text style={{marginLeft: 14}}>{item}</Text>
                  ))}
                </View>
              </View>
            </>
          )}
          {this.state.activeTab === 1 && (
            <>
              <View style={{marginTop: 25}}>
                <View style={styles.label1}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Học Kỳ I:
                  </Text>
                  {this.state.tabsData[1].content[
                    this.state.activeYear
                  ].diem1.map((item) => (
                    <Text style={{marginLeft: 14}}>{item}</Text>
                  ))}
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <View style={styles.label1}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 20,
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Học Kỳ II:
                  </Text>
                  {this.state.tabsData[1].content[
                    this.state.activeYear
                  ].diem2.map((item) => (
                    <Text style={{marginLeft: 14}}>{item}</Text>
                  ))}
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#3E4A90',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  header1: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    backgroundColor: 'red',
    backgroundColor: '#3E4A90',
  },

  name: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  line: {
    height: 1,
    width: 55,
    color: '#00000029',
  },
  view100: {
    height: 34,
    width: 34,
    borderRadius: 34 / 2,
    borderColor: '#3E4A90',
    backgroundColor: '#FFF',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 17,
  },
  viewDay: {
    height: 25,
    width: 96,
    borderRadius: 15,
    backgroundColor: '#3E4A90',
    borderColor: '#3E4A90',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 17,
  },
  activedTab: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
    paddingVertical: 10,
  },
  activedTabMonth: {},
  tab: {},
  label: {
    backgroundColor: '#F0EFEF',
    height: 88,
    width: width - 28,
    marginHorizontal: 14,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 7,
  },
  label1: {
    backgroundColor: '#F0EFEF',
    height: 88,
    width: width - 28,
    marginHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 7,
  },
});
