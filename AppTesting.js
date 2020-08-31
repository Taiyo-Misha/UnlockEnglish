import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './AppStyle';

const NameOfMonth = (data) => {
    let s="";
    console.log(data)
    switch(data.month) {
        case 1: s="Jan"; break;
        case 2: s="Feb"; break;
        case 3: s="Mar"; break;
        case 4: s="Apr"; break;
        case 5: s="May"; break;
    }
    console.log("Tháng "+data.month+": "+s)
    return (
        <Text style={styles.headerCalenderText}>{s}</Text>
    )
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerArea}></View>
                <View style={styles.banTinCaNhan}></View>
                <View style={styles.buttonNavArea}>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Icon name="calendar" size={30} color="#3e4a90" />
                        <Text>Thời khoá biểu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Icon name="book" size={30} color="#3e4a90" />
                        <Text>Số điểm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Icon name="list-alt" size={30} color="#3e4a90" />
                        <Text>Nhật kí học tập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Icon name="pencil" size={30} color="#3e4a90" />
                        <Text>Xin nghỉ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Icon name="file-text" size={30} color="#3e4a90" />
                        <Text>Khảo sát</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.banTin}>
                    <TouchableOpacity style={styles.btnNavArea}>
                        <Text>Bản tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
