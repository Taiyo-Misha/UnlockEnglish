import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: '#ffffff',
  },
  submit: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#3b5998',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: -10,
  },
});
const CheckOldPassword = ({navigation}) => {
  const [password, setPassword] = useState('');

  const [placeholder, setPlaceholder] = useState('Nhập mật khẩu hiện tại');

  const [placeholderTextColor, setPlaceholderTextColor] = useState('#6b6a66');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: '5%',
          marginRight: '5%',
          flexDirection:'column',
          justifyContent: 'center',
        }}>
        {/* <View style={{flex: 1,}}> */}
          <Text style={{marginTop: 10, color: '#6b6a66'}}>
            Để đảm bảo an toàn tài khoản của bạn, vui lòng nhập mật khẩu của bạn
            để tiếp tục
          </Text>
        {/* </View> */}

        <View >
          <TextInput
            secureTextEntry={true}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.inputStyle}
            onChangeText={(text) => {
              setPassword(text);
              setPlaceholder('Nhập mật khẩu hiện tại');
              setPlaceholderTextColor('#6b6a66');
            }}
          />
          <TouchableHighlight
            style={styles.submit}
            onPress={() => {
              if (password != 'admin') {
                setPlaceholder('Mật khẩu hiện tại không chính xác');
                setPlaceholderTextColor('red');
              } else navigation.navigate('Screen_ChangeOldPassword');
            }}
            underlayColor="#fff">
            <Text style={styles.submitText}>Tiếp</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CheckOldPassword;
