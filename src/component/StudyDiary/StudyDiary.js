import React, {Component} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList, 
  ScrollView, Dimensions, Button,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class StudyDiary extends Component {
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
        {date: '26/08 - 01/09', title: 'Title 1', description: 'Description 1'},
        {date: '01/09 - 07/09', title: 'Title 2', description: 'Description 2'},
        {date: '07/09 - 14/09', title: 'Title 3', description: 'Description 3'},
        {date: '14/09 - 21/09', title: 'Title 4', description: 'Description 4'},
      ],
      activeTab: '26/08 - 01/09',
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
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Nhật ký học tập
            </Text>
          </View>
        </TouchableOpacity>
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
        <View style={{height: 60, width: '100%'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.tabsData.map((item) => (
              <TouchableOpacity
                style={{alignItems: 'center'}}
                key={item}
                onPress={() => {
                  this.setState({activeTab: item.date});
                }}>
                <View
                  style={[
                    {
                      alignItems: 'center',
                      marginHorizontal: 14,
                      justifyContent: 'center',
                      marginVertical: 10,
                    },
                  ]}>
                  <Text
                    style={{
                      color:
                        this.state.activeTab === item.date
                          ? '#3E4A90'
                          : '#00000029',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {item.date}
                  </Text>
                  <View
                    style={[
                      {height: 10, width: 60, marginTop: -10},
                      this.state.activeTab === item.date
                        ? styles.activedTab
                        : styles.tab,
                    ]}></View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {this.state.activeTab === this.state.tabsData[0].date && (
          <View style={{backgroundColor: '#FFF'}}>
            <View style={[styles.label1, {marginTop: 16}]}>
              <FlatList
                data={this.state.data1}
                renderItem={({item}) => (
                  <View style={styles.label}>
                    <View style={styles.view100}>
                      <Text
                        style={{
                          color: '#3E4A90',
                          fontSize: 13,
                          alignItems: 'center',
                        }}>
                        {item.key2}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={[styles.label2, {marginTop: 16}]}>
              <FlatList
                data={this.state.data2}
                renderItem={({item}) => (
                  <View style={{marginTop: 15}}>
                    <View style={[styles.viewDay, {top: 0}]}>
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 13,
                          alignItems: 'center',
                        }}>
                        {item.key3}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 13,
                        marginLeft: 17,
                        fontWeight: 'bold',
                        marginTop: 10,
                      }}>
                      Bài tập về nhà:
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        )}
        {this.state.activeTab === this.state.tabsData[1].date && (
          <View>
            <Text>Man 2</Text>
          </View>
        )}
        {this.state.activeTab === this.state.tabsData[2].date && (
          <View>
            <Text>Man 3</Text>
          </View>
        )}
        {this.state.activeTab === this.state.tabsData[3].date && (
          <View>
            <Text>Man 4</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#3E4A90',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 1,
    },
    shadowOpacity: 0.22,
    elevation: 3,
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
    borderBottomColor: '#3E4A90',
    borderBottomWidth: 3,
    paddingVertical: 10,
  },
  tab: {},
  label: {
    backgroundColor: '#F0EFEF',
    height: 88,
    width: width - 28,
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
  label2: {
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
