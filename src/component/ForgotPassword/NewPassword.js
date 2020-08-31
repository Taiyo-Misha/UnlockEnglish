import React, {useState} from 'react';
import {
  SafeAreaView, Text, Dimensions, TouchableHighlight, View,
  TextInput, StyleSheet, Alert,
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
    marginTop: -15,
  },
});
const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [placeholder, setPlaceholder] = useState('Nhập lại mật khẩu mới');
  const [placeholderTextColor, setPlaceholderTextColor] = useState('#6b6a66');

  return (
    <View>
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: '5%',
          marginRight: '5%',
          justifyContent: 'space-between',
        }}>
        <Text style={{marginTop: 10, color: '#6b6a66'}}>
          Vui lòng nhập mật khẩu mới mà bạn muốn thay đổi để tiếp tục
        </Text>

        <View>
          <TextInput
            secureTextEntry={true}
            placeholder="Mật khẩu mới"
            placeholderTextColor="#6b6a66"
            style={styles.inputStyle}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.inputStyle}
            onChangeText={(text) => {
              setRepassword(text);
              setPlaceholder('Nhập lại mật khẩu mới');
              setPlaceholderTextColor('#6b6a66');
            }}
          />
          <TouchableHighlight
            style={styles.submit}
            onPress={() => {
              if (password != repassword) {
                setPlaceholder('Mật khẩu không khớp');
                setPlaceholderTextColor('red');
              } else {
                Alert.alert('Thay đổi mật khẩu thành công!');
                navigation.navigate('Screen_Login');
              }
            }}
            underlayColor="#fff">
            <Text style={styles.submitText}>Tiếp</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default NewPassword;
