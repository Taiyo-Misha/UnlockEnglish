import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './ScheduleStyle';

const NameOfMonth = (data) => {
    let s="";
    console.log(data)
    switch(data.month) {
        case 1: s="Jan"; break;
        case 2: s="Feb"; break;
        case 3: s="Mar"; break;
        case 4: s="Apr"; break;
        case 5: s="May"; break;
        case 6: s="Jun"; break;
        case 7: s="Jul"; break;
        case 8: s="Aug"; break;
        case 9: s="Sep"; break;
        case 10: s="Oct"; break;
        case 11: s="Nov"; break;
        case 12: s="Dec"; break;
        case 13: s="Jan"; break;
        case 14: s="Feb"; break;
        case 15: s="Mar"; break;
        case 16: s="Apr"; break;
    }
    console.log("Tháng "+data.month+": "+s)
    return (
        <Text style={styles.headerCalenderText}>{s}</Text>
    )
}

const CalendarHeader = (date) => {
    console.log("DATE: "+date)
    return(
        <View style={{ flexDirection: 'row', flex:1 }}> 
            <View style={{ flex: 1 }}> 
                <TouchableOpacity>
                    <NameOfMonth month={date[0].getMonth()+1}  />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <NameOfMonth month={date[0].getMonth()+2} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <NameOfMonth month={date[0].getMonth()+3} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <NameOfMonth month={date[0].getMonth()+4} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    popScreen(){
        this.props.navigation.goBack();
    }

    render() {
        LocaleConfig.locales['vi'] = {
            monthNames: ['Jan', 'Feb', 'Mars', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        };
        LocaleConfig.defaultLocale = 'vi';

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1, flexDirection: "row", alignContent: 'center', paddingHorizontal: 20 }}>
                    <TouchableOpacity 
                        style={{}}
                        onPress={this.popScreen.bind(this)}
                    >
                        <Icon name="angle-left" size={30} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.nameScreen}>Thời khoá biểu</Text>
                </View>
                <View style={{ flex: 7, paddingHorizontal: '6%' }}>
                    <Calendar
                        minDate={'2020-01-01'}
                        maxDate={'2020-12-31'}
                        onDayPress={(day) => { console.log('selected day', day) }}
                        onDayLongPress={(day) => { console.log('selected day', day) }}
                        // Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        onMonthChange={(month) => { console.log('month changed', month) }}
                        hideArrows={true}
                        disableMonthChange={false}
                        // If firstDay=1 week starts from Monday
                        firstDay={1}
                        hideDayNames={false}
                        disableArrowLeft={true}
                        disableArrowRight={true}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={false}
                        /** Replace default month and year title with custom one. the function receive a date as parameter. */
                        renderHeader={CalendarHeader}
                        style={styles.calenderStyle}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#3e4a90',
                            textSectionTitleColor: '#ffffff',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#ff0000',
                            dayTextColor: '#ffffff',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'Courier',
                            textMonthFontFamily: 'Courier',
                            textDayHeaderFontFamily: 'Courier',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 18,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}

                    />
                </View>
                <View style={styles.classInfoList}>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen_ScheduleDetail')}>
                            <Icon name="angle-up" size={45} color="#3e4a90" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.classInfoDay}>
                        <Text style={styles.classInfoDayText}>August 30th</Text>
                    </View>
                    <View style={styles.classDescription}>
                        <View style={styles.timeAndTeacher}>
                            <Text style={styles.classTextBold}>18:00-19:00</Text>
                            <Text style={styles.classTextSlim}>Ms Phuong</Text>
                        </View>
                        <View style={styles.classNameAndType}>
                            <Text style={styles.classTextBold}>Lớp 4 (Nhóm 1)</Text>
                            <Text style={styles.classTextSlim}>Hệ Cambridge</Text>
                        </View>
                    </View>

                    <View style={styles.classDescription}>
                        <View style={styles.timeAndTeacher}>
                            <Text style={styles.classTextBold}>18:00-19:00</Text>
                            <Text style={styles.classTextSlim}>Ms Phuong</Text>
                        </View>
                        <View style={styles.classNameAndType}>
                            <Text style={styles.classTextBold}>Lớp 4 (Nhóm 1)</Text>
                            <Text style={styles.classTextSlim}>Hệ Cambridge</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
