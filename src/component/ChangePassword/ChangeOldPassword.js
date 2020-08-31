import React from 'react';
import { SafeAreaView, Text, Dimensions, TouchableOpacity, StyleSheet,
  View, Image, TextInput, Modal, Linking,
} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import {Switch} from 'react-native-switch';
import CheckBox from 'react-native-check-box';

import styles from './ChangeOldPasswordStyle'

const {width, height} = Dimensions.get('window');
const LOGO_PATH = '../../../assets/Login/Logo.png';
const DEFAUT_COLOR_BLUE = '#3e4a90';

export default class ChangeForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      wrongText: '',
      userName: '',
      passWord: '',
      modalCallVisible: false,
    };
  }
  onChangeUser = (value) => {
    console.log(value);

    this.setState({
      userName: value,
    });
  };
  onChangePass = (value) => {
    this.setState({
      passWord: value,
    });
  };
  onSubmitForm = () => {
    if (this.state.userName === '') {
      this.setState({
        wrongText: 'Tên đăng nhập sai',
      });
      return;
    }
    if (this.state.passWord === '') {
      this.setState({
        wrongText: 'Mật khẩu sai',
      });
      return;
    }
    this.setState({
      wrongText: '',
    });
    //submit form to api
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
        <View style={styles.headerWrap}>
          <View style={styles.left}>
            <TouchableOpacity
              onPress={() => this.setState({modalCallVisible: true})}
              style={styles.btnSupport}>
              <Icon name="phone" size={26} color={DEFAUT_COLOR_BLUE} />
              <Text style={styles.txtSupport}>Hỗ trợ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <Switch
              value={false}
              onValueChange={(val) => console.log(val)}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={19}
              barHeight={26}
              backgroundActive={DEFAUT_COLOR_BLUE}
              backgroundInactive={DEFAUT_COLOR_BLUE}
              circleActiveColor={'white'}
              circleInActiveColor={'white'}
              changeValueImmediately={true}
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              outerCircleStyle={{}}
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2}
              switchRightPx={2}
              switchWidthMultiplier={3}
              switchBorderRadius={30}
            />
            <Text style={styles.txtCurrentLanguage}>VI</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image source={require(LOGO_PATH)} style={styles.logo} />
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => this.setState({modalCallVisible: true})}
              style={styles.btnSupport}>
              <IconAwesome name="lock" size={26} color={DEFAUT_COLOR_BLUE} />
              <Text style={styles.txtSupport}>
                 Nhập mật khẩu mới
              </Text>
            </TouchableOpacity>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={this.onChangePass}
                style={styles.input}
                placeholder=""
              />
            </View>
            <View style={styles.right}>
              <TouchableOpacity
                style={styles.btnModalCall}
                onPress={() => {
                    this.props.navigation.goBack()
                }}>
                <Text style={styles.txtbtnCall}>QUAY LẠI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnModalCall,
                  {marginLeft: 15, backgroundColor: DEFAUT_COLOR_BLUE},
                ]}
                onPress={() => {
                  this.props.navigation.navigate("Screen_Login")
                 // Linking.openURL('tel:0988.999.888');
                }}>
                <Text style={[styles.txtbtnCall, {color: 'white'}]}>
                  ĐỔI MẬT KHẨU
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalCallVisible}
            onRequestClose={() => {}}>
            <View style={styles.modalCall}>
              <View style={styles.contentCall}>
                <Text style={styles.txtNumber}>0988.999.888</Text>
                <View style={styles.right}>
                  <TouchableOpacity
                    style={styles.btnModalCall}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}>
                    <Text style={styles.txtbtnCall}>QUAY LẠI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btnModalCall, {marginLeft: 15}]}
                    onPress={() => {
                      Linking.openURL('tel:0988.999.888');
                    }}>
                    <Text style={styles.txtbtnCall}>GỌI CHÚNG TÔI</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.viewImgCall}>
                  <IconAwesome
                    name="phone"
                    size={30}
                    color={DEFAUT_COLOR_BLUE}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}