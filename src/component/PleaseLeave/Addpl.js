import _ from 'lodash';
import React, {Component} from 'react';
import { Platform, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, 
  ScrollView, Image, TextInput, Dimensions, Button,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda, Calendar, ExpandableCalendar, Timeline, CalendarProvider } from 'react-native-calendars';

export default class Addpl extends Component {
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
          <View style={styles.he}>
            <View style={styles.hee}>
              <View style={styles.he_item}>
                <Text
                  style={[styles.he_text, styles.text_right, styles.bold_text]}>
                  Nguyễn Tuấn Linh
                </Text>
              </View>
              <View style={styles.header_but}>
                <Icon name="chevron-right" size={15} color="#3e4a90" />
              </View>
            </View>
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
                marginHorizontal: 28,
                width: width - 28,
                height: 178,
                backgroundColor: '#F0EFEF',
                marginTop: 25,
                alignItems: 'center',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 7,
              }}>
              <View
                style={{
                  height: 117,
                  width: width - 60,
                  backgroundColor: '#FFf',
                  marginHorizontal: 10,
                  marginTop: 10,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,
                  elevation: 7,
                }}>
                <TextInput
                  style={{height: 117, borderColor: '#F0EFEF', borderWidth: 1}}
                  placeholder="Nhập vào đây"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', marginTop: 10}}>
                    <Entypo
                      name="attachment"
                      size={19}
                      color="#3E4A90"
                      style={{marginLeft: 14}}
                    />
                    <Text
                      style={{
                        marginLeft: 8,
                        color: '#3E4A90',
                        fontWeight: 'bold',
                      }}>
                      Đính kèm tệp
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 64,
                      height: 27,
                      borderRadius: 20,
                      backgroundColor: '#3E4A90',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFF',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Gửi
                    </Text>
                  </TouchableOpacity>
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
  socialButtonContent: {
    flexDirection: 'row',
    padding: 13,
  },
  footer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF',
    height: height,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    borderRadius: 15,
    color: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#3e4a90',
    fontWeight: 'bold',
    fontSize: 15,
  },
  f: {
    padding: 60,
  },
  list: {
    padding: 5,
    height: 290,
    backgroundColor: '#efefef',
    width: 358,
    borderRadius: 8,
  },
  nut: {
    paddingLeft: 100,
    paddingRight: 15,
  },
  lText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e4a90',
    paddingLeft: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 200,
    width: 320,
    borderColor: '#7a42f4',
    borderRadius: 8,
  },
  container: {
    backgroundColor: '#3e4a90',
  },
  fButton: {
    backgroundColor: '#efefef',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e4a90',
    paddingLeft: 60,
  },
  header: {
    backgroundColor: '#3e4a90',
    flexDirection: 'row',
    padding: 15,
    height: 60,
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
    borderRadius: 10,
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
