import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import BottomBasic from '@src/ui/bottom';
import SwitchTheme from '@src/components/switch-theme';
import {useTheme} from '@react-navigation/native';
import FloatingLabelInput from '@src/ui/input/FloatingLabelInput';
import {useKeyboardVisible} from '@src/hooks/useKeyboardVisible';
import FadeModal from '@src/components/modal';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  const {colors} = useTheme();
  const [valueInput, setvalueInput] = useState<string>('');
  const [valueInput2, setvalueInput2] = useState<string>('');
  const handleTextChange = (newText: string) => setvalueInput(newText);
  const handleTextChange2 = (newText: string) => setvalueInput2(newText);

  const {isKeyboardVisible} = useKeyboardVisible();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>Welcome</Text>
      <BottomBasic text="Login" onPress={() => navigation.navigate('Login')} />
      <View style={{gap: 40, width: '100%', marginTop: 40}}>
        <FloatingLabelInput
          label={'Email'}
          value={valueInput}
          onChangeText={handleTextChange}
        />
        <FloatingLabelInput
          label={'Password'}
          value={valueInput2}
          onChangeText={handleTextChange2}
        />
      </View>
      <BottomBasic
        text="Open modal"
        onPress={() => setModalVisible(!modalVisible)}
      />
      <FadeModal visible={modalVisible}>
        <View style={styles.modal}>
          <Text>Hola</Text>
        </View>
      </FadeModal>
      {!isKeyboardVisible && (
        <View style={styles.switchContainer}>
          <SwitchTheme />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 55,
    paddingLeft: 30,
  },
  switchContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 30,
  },
  modal: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 6,
  },
});
