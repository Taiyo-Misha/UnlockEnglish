import _ from 'lodash';
import React, {Component} from 'react';
import {
  TouchableOpacity, StyleSheet, View, Text, SafeAreaView,
  ScrollView, Image, TextInput, Button, Dimensions,
  _View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Agenda} from 'react-native-calendars';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class List extends Component {
  state = {
    currentDate: '2020-08-21',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <View style={styles.header_button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="chevron-left" size={18} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.header_item}>
              <Text
                style={[
                  styles.header_text,
                  styles.text_center,
                  styles.bold_text,
                ]}>
                Xin nghỉ
              </Text>
            </View>
          </View>
          <View style={styles.headerTop}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
              Nguyễn Tuấn Linh
            </Text>
            <TouchableOpacity>
              <Icon name="chevron-right" size={15} color="#3e4a90" />
            </TouchableOpacity>
          </View>
          <View style={styles.h}>
            <Agenda
              // Callback that gets called when items for a certain month should be loaded (month became visible)
              loadItemsForMonth={(monthmonth) => {
                console.log('trigger items loading');
              }}
              // Callback that fires when the calendar is opened or closed
              onCalendarToggled={(calendarOpened) => {
                console.log(calendarOpened);
              }}
              // Callback that gets called on day press
              onDayPress={(day) => {
                console.log('day pressed');
              }}
              // Callback that gets called when day changes while scrolling agenda list
              onDayChange={(day) => {
                console.log('day changed');
              }}
              monthFormat={'yyyy MM'}
              // Initially selected day
              selected={'2020-05-16'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2020-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2021-05-30'}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Bật hoặc tắt tính năng cuộn của danh sách lịch
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              // Set custom calendarWidth.
              scrollEnabled={true}
              // Bật hoặc tắt chỉ báo cuộn dọc. Mặc định = false
              showScrollIndicator={false}
              // Enable paging on horizontal, default = false
              hideDayNames={true}
              // Specify how each item should be rendered in agenda
              renderItem={(item, firstItemInDay) => {
                return <View style={styles.footer}></View>;
              }}
              // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
              renderDay={(day, item) => {
                return <View style={styles.footer}></View>;
              }}
              renderEmptyDate={() => {
                return <View style={styles.footer}></View>;
              }}
              hideKnob={false}
              // By default, agenda dates are marked if they have at least one item, but you can override this if needed
              markedDates={{
                '2020-01-16': {selected: true, marked: true},
                '2020-05-17': {marked: true},
                '2021-05-18': {disabled: true},
              }}
              // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
              disabledByDefault={true}
              // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
              onRefresh={() => console.log('refreshing...')}
              // Set this true while waiting for new data from a refresh
              refreshing={false}
              // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
              refreshControl={null}
              // Agenda theme
              theme={{
                calendarBackground: '#3E4A90',
                textSectionTitleColor: '#ffffff',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#ffffff',
                textDisabledColor: '#ffffff',
                dotColor: '#ffffff',
                selectedDotColor: '#ffffff',
                arrowColor: '#ffffff',
                monthTextColor: '#ffffff',
                monthTextSize: 20,
              }}
              // Agenda container style
              style={{
                height: 150,
              }}
            />
          </View>
          <View style={styles.footer}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 28,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Screen_AddPleaseLeave')}
                style={{
                  backgroundColor: '#F0EFEF',
                  width: width - 56,
                  height: 50,
                  marginTop: 25,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: 31,
                    width: 31,
                    borderRadius: 5,
                    backgroundColor: '#3e4a90',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 14,
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>+</Text>
                  </View>
                </View>
                <View style={{flex: 9}}>
                  <Text style={{ color: '#3e4a90', fontSize: 20, fontWeight: 'bold', textAlign: 'center', }}>
                    Tạo đơn xin nghỉ
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{marginTop: 32}}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', }}>
                  Lịch sử xin nghỉ
                </Text>
                <View
                  style={{
                    backgroundColor: '#F0EFEF',
                    width: width - 56,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 17,
                  }}>
                  <Text style={{color: '#000', marginLeft: 14, marginTop: 5}}>
                    Em xin phép nghỉ vì em bị ốm sốt
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  lsText: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  text: {
    borderRadius: 5,
    color: '#FFFFFF',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3e4a90',
    fontWeight: 'bold',
    fontSize: 25,
  },
  list: {
    paddingTop: 10,
    height: 300,
    flexDirection: 'row',
    marginBottom: 28,
    marginLeft: 20,
    width: 358,
    borderRadius: 5,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    marginBottom: 28,
    marginLeft: 20,
    width: 358,
    borderRadius: 5,
  },
  f: {
    padding: 50,
  },
  socialButtonContent: {
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 590,
  },
  container: {
    backgroundColor: '#3e4a90',
  },
  fButton: {
    backgroundColor: '#efefef',
  },
  loText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e4a90',
    paddingLeft: 60,
  },
  header: {
    backgroundColor: '#3e4a90',
    flexDirection: 'row',
    padding: 15,
    height: 50,
    justifyContent: 'center',
  },
  he: {
    backgroundColor: '#3e4a90',
    flexDirection: 'row',
    height: 60,
  },
  h: {
    paddingTop: 10,
    backgroundColor: '#3e4a90',
    flexDirection: 'row',
    height: 200,
  },
  hee: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_item: {
    flex: 1,
  },
  header_button: {
    paddingTop: 5,
  },
  header_but: {
    paddingTop: 20,
    paddingLeft: 300,
  },

  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  header_text: {
    color: '#fff',
    fontSize: 20,
  },
  he_text: {
    paddingTop: 10,
    paddingLeft: 10,
    color: '#000',
    fontSize: 20,
  },
  bold_text: {
    fontWeight: 'bold',
  },
});
