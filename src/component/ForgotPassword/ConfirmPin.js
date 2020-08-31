import React from 'react';
import { SafeAreaView, Text, Dimensions, TouchableOpacity, StyleSheet, View,
  Image, TextInput, Modal, Linking,
} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import {Switch} from 'react-native-switch';
import CheckBox from 'react-native-check-box';

const {width, height} = Dimensions.get('window');
const LOGO_PATH = '../../../assets/Login/Logo.png';
const DEFAUT_COLOR_BLUE = '#3e4a90';

export default class ComfirmPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      wrongText: '',
      pinMsg: '',
      modalCallVisible: false,
    };
  }
  onChangePin = (value) => {
    this.setState({
      pinMsg: value,
    });
  };
  onSubmitForm = () => {
    if (this.state.pinMsg !== '123456') {
      this.setState({
        wrongText: 'Bạn nhập sai mã',
      });
      return;
    }
    this.setState({
      wrongText: '',
    });
    if(this.state.pinMsg==='123456'){
      this.props.navigation.navigate("Screen_NewPassword")
    }
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
              <IconAwesome name="lock" size={26} color={this.state.wrongText===''?DEFAUT_COLOR_BLUE:"red"} />
              <Text style={[styles.txtSupport,{color:this.state.wrongText===''?DEFAUT_COLOR_BLUE:"red"}]}>
                Vui lòng điền mã xác minh
              </Text>
            </TouchableOpacity>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={this.onChangePin}
                style={[styles.input,,{color:this.state.wrongText===''?DEFAUT_COLOR_BLUE:"red"}]}
                placeholder=""
                value={this.state.pinMsg}
                secureTextEntry={true}
              />
            </View>
            {this.state.wrongText !== '' && (
              <Text style={styles.txtWrong}>{this.state.wrongText}</Text>
            )}
            <View style={styles.right}>
              <TouchableOpacity
                style={[styles.btnModalCall,{marginTop: this.state.wrongText===''?40:10}]}
                onPress={() => {
                   this.props.navigation.goBack()
                }}>
                <Text style={styles.txtbtnCall}>QUAY LẠI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                    styles.btnModalCall,{marginTop: this.state.wrongText===''?40:10},
                  {marginLeft: 15, backgroundColor: DEFAUT_COLOR_BLUE},
                ]}
                onPress={this.onSubmitForm}>
                <Text style={[styles.txtbtnCall, {color: 'white'}]}>
                XÁC MINH
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
const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 23,
    marginHorizontal: 14,
  },
  btnSupport: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSupport: {
    fontSize: 16,
    marginLeft: 8,
    color: DEFAUT_COLOR_BLUE,
  },
  txtCurrentLanguage: {
    position: 'absolute',
    right: 10,
    color: 'white',
    fontSize: 14,
  },
  content: {
    position: 'absolute',
    height: height,
    width: width - 120,
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 60,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInput: {
    backgroundColor: 'white',
    padding: 13,
    marginTop: 25,
    borderRadius: 5,
    flexDirection:"column",
    alignItems:'center',justifyContent:'center'
  },
  logo: {
    width: width - 162,
    height: (97 * (width - 162)) / 251,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 13,
  },
  icon: {
    position: 'absolute',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
    fontSize: 20,
    marginHorizontal:27,
    flex:1,
    textAlign:'center',
    color:DEFAUT_COLOR_BLUE,
    letterSpacing:6,
  },
  passWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnLogin: {
    borderRadius: 20,
    backgroundColor: DEFAUT_COLOR_BLUE,
    paddingVertical: 13,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 18,
  },
  txtForgotPass: {fontSize: 14, color: DEFAUT_COLOR_BLUE},
  txtWrong: {
    color: '#C81C1F',
    fontSize: 13,
    textAlign: 'center',
  },
  modalCall: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  viewImgCall: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -32,
  },
  contentCall: {
    backgroundColor: DEFAUT_COLOR_BLUE,
    width: width - 54,
    paddingHorizontal: 27,
    paddingTop: 52,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNumber: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
  txtbtnCall: {
    color: DEFAUT_COLOR_BLUE,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '900',
  },
  btnModalCall: {
    width: width / 3.5,
    paddingVertical: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: DEFAUT_COLOR_BLUE,
    borderWidth: 1,
    color: '#000',
    marginTop: 40,
    marginBottom: 30,
  },
});
