import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './HomeStyle';

const DATA = [
    {
        colorType: 'red',
        textContent: 'Em Kiên nghỉ học ko phép'
    }, {
        colorType: 'green',
        textContent: 'Em Kiên 10đ thi cuối kì'
    }, {
        colorType: 'green',
        textContent: 'Em Kiên nói chuyện trong giờ học'
    }
]

const DATA_ALL_BANTIN = [
    {
        location: 'red',
        textContent: 'Em Kiên nghỉ học ko phép'
    }, {
        location: 'green',
        textContent: 'Em Kiên 10đ thi cuối kì'
    }, {
        location: 'green',
        textContent: 'Em Kiên nói chuyện trong giờ học'
    }
]

renderItemBanTinCaNhan = (value) => {
    let bantin = value.item
    return (
        <View style={{flex:1, flexDirection: 'row', marginVertical: 3 }}>
            <View style={{ backgroundColor: bantin.colorType, flex:1, borderRadius: 4 }}></View>
            <View style={{ flex:2 }}>
                <Text style={{fontSize: 16}}>  {bantin.textContent}</Text>
            </View>
        </View>
    )
}

renderItemBanTinAll = (value) => {
    let bantin = value.item
    return (
        <View style={styles.allBanTinItem}>
            <View style={{ flex:4, borderRadius: 4 }}>
                <Image style={styles.bigPic}
                    source={require('../../../assets/img/1.jpg')}
                />
            </View>
            <View style={{ flex:2 }}>
                <Text style={{fontSize: 14, maxWidth: 184, margin: 5}}>    {bantin.textContent}</Text>
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

    hrefScrren(nameScreen){
        this.props.navigation.navigate(nameScreen)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerArea}>
                    <View style={styles.HoTroArea}>
                        <Icon name="phone" size={40} color="#ffffff" />
                        <Text style={styles.HoTroText}> Hỗ trợ</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.ProfileBtn}>
                            <Image style={styles.ProfileBtnPic} source={require('../../../assets/img/anh.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Bản tin cá nhân */}
                <View style={styles.banTinCaNhan}>
                    <Text style={styles.banTinCaNhanText}>Xin chào</Text>
                    <Text style={styles.banTinCaNhanText}>Bản tin cá nhân!</Text>
                    <SafeAreaView style={styles.banTinList}>
                        <FlatList 
                            data={DATA}
                            renderItem={renderItemBanTinCaNhan}
                            keyExtractor={(item) => console.log(item)}
                        />
                    </SafeAreaView>
                </View>
                {/* Button Navigate */}
                <View style={styles.buttonNavArea}>
                    <TouchableOpacity 
                        style={styles.btnNavArea} 
                        onPress={this.hrefScrren.bind(this,'Screen_Schedule')}
                    >
                        <Icon name="calendar" size={37} color="#3e4a90" />
                        <Text style={styles.btnNavAreaText}>Thời khoá biểu</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.btnNavArea}
                        onPress={this.hrefScrren.bind(this,'Screen_ScoreBook')}
                    >
                        <Icon name="book" size={37} color="#3e4a90" />
                        <Text style={styles.btnNavAreaText}>Số điểm</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.btnNavArea}
                        onPress={this.hrefScrren.bind(this,'Screen_StudyDiary')}
                    >
                        <Icon name="list-alt" size={37} color="#3e4a90" />
                        <Text style={styles.btnNavAreaText}>Nhật kí học tập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonNavArea}>
                    <TouchableOpacity 
                        style={styles.btnNavArea}
                        onPress={this.hrefScrren.bind(this,'Screen_PleaseLeave')}
                    >
                        <Icon name="pencil" size={37} color="#3e4a90" />
                        <Text style={styles.btnNavAreaText}>Xin nghỉ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnNavArea}
                        onPress={this.hrefScrren.bind(this,'Screen_Survey')}
                    >
                        <Icon name="file-text" size={37} color="#3e4a90" />
                        <Text style={styles.btnNavAreaText}>Khảo sát</Text>
                    </TouchableOpacity>
                </View>                
                {/* Bản tin list */}
                <View style={styles.banTinArea}>
                    <View style={styles.banTinTextArea}>
                        <View>
                            <TouchableOpacity onPress={this.hrefScrren.bind(this,'Screen_News')}>
                                <Text style={styles.btnBanTinAllText}>Bản tin</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.hrefScrren.bind(this,'Screen_News')}>
                                <Text style={styles.btnBanTinAllText}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:6, marginBottom: 15}}>
                        <SafeAreaView style={styles.allBanTinList}>
                            <FlatList
                                data={DATA_ALL_BANTIN}
                                renderItem={renderItemBanTinAll}
                                keyExtractor={(item) => console.log(item)}
                                horizontal={true}
                            />
                        </SafeAreaView>
                        <View style={{flex: 1,}}></View>
                    </View>
                </View>
            </View>
        );
    }
}
