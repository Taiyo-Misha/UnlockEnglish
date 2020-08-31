import React from 'react';
import {
  SafeAreaView, Text, Dimensions, TouchableOpacity, StyleSheet,
  View, Image, TextInput, Modal, Linking,
} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from 'react-native-switch';
import CheckBox from 'react-native-check-box';

import styles from './LoginStyle'

const { width, height } = Dimensions.get('window');
const LOGO_PATH = '../../../assets/Login/Logo.png';
const DEFAUT_COLOR_BLUE = '#3e4a90';

export default class Login extends React.Component {
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
    let wrongText = "";
    if (this.state.userName !== '123456') {
      wrongText += 'Tên đăng nhập sai';
    }
    if (this.state.passWord !== '123456') {
      if (wrongText !== "")
        wrongText += ' hoặc mật khẩu sai';
      else
        wrongText = "Mật khẩu sai"
    }

    this.setState({
      wrongText: wrongText,
    });
    if (this.state.userName === '123456' && this.state.passWord === '123456') {
      this.props.navigation.navigate("Home")
    }
    //submit form to api
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <View style={styles.headerWrap}>
          <View style={styles.left}>
            <TouchableOpacity
              onPress={() => this.setState({ modalCallVisible: true })}
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
            <View style={styles.inputWrapper}>
              <IconAwesome style={styles.icon} name="user" size={26}
                color={this.state.wrongText !== '' && this.state.userName !== '123456' ? 'red' : "#a3a3a3"}
              />
              <TextInput
                onChangeText={this.onChangeUser}
                style={[styles.input, { color: this.state.wrongText !== '' && this.state.userName !== '123456' ? 'red' : "black" }]}
                placeholder="Tên đăng nhập"
                value={this.state.userName}
              />
            </View>
            <View style={styles.inputWrapper}>
              <IconAwesome style={styles.icon} name="lock" size={26}
                color={this.state.wrongText !== '' && this.state.passWord !== '123456' ? 'red' : "#a3a3a3"}
              />
              <TextInput
                onChangeText={this.onChangePass}
                style={[styles.input, { color: this.state.wrongText !== '' && this.state.passWord !== '123456' ? 'red' : "black" }]}
                placeholder="Mật khẩu"
                value={this.state.passWord}
              />
            </View>
            {this.state.wrongText !== '' && (
              <Text style={styles.txtWrong}>{this.state.wrongText}</Text>
            )}
            <View style={styles.passWrapper}>
              <CheckBox
                style={{
                  flex: 1,
                  paddingVertical: this.state.wrongText !== '' ? 5 : 20,
                }}
                onClick={() => {
                  console.log('vao day');
                  this.setState({
                    isChecked: !this.state.isChecked,
                  });
                }}
                checkBoxColor={DEFAUT_COLOR_BLUE}
                rightText="Nhớ mật khẩu"
                isChecked={this.state.isChecked}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Screen_Confirm')
                }>
                <Text style={styles.txtForgotPass}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.onSubmitForm}>
              <Text style={styles.btnLogin}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalCallVisible}
            onRequestClose={() => { }}>
            <View style={styles.modalCall}>
              <View style={styles.contentCall}>
                <Text style={styles.txtNumber}>0988.999.888</Text>
                <View style={styles.right}>
                  <TouchableOpacity
                    style={styles.btnModalCall}
                    onPress={() => {
                      this.setState({
                        modalCallVisible: !this.state.modalCallVisible,
                      });
                    }}>
                    <Text style={styles.txtbtnCall}>QUAY LẠI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btnModalCall, { marginLeft: 15 }]}
                    onPress={() => {
                      Linking.openURL('tel:0988.999.888');
                    }}>
                    <Text style={styles.txtbtnCall}>GỌI CHÚNG TÔI</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.viewImgCall}>
                  <IconAwesome name="phone" size={30} color={DEFAUT_COLOR_BLUE} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}