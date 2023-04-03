import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputBasic from '@src/ui/input';
import BottomBasic from '@src/ui/bottom';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useAuthContext} from '@src/context/AuthContext';
import {useKeyboardVisible} from '@src/hooks/useKeyboardVisible';
import FadeModal from '../modal';
import SwitchTheme from '../switch-theme';
import FloatingLabelInput from '@src/ui/input/FloatingLabelInput';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Invalid email')
    .required('Email is required!'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
});
const LoginForm = () => {
  const [valueInput, setvalueInput] = useState<string>('');
  const [valueInput2, setvalueInput2] = useState<string>('');
  const handleTextChange = (newText: string) => setvalueInput(newText);
  const handleTextChange2 = (newText: string) => setvalueInput2(newText);

  const [modalVisible, setModalVisible] = useState(false);

  const {signIn} = useAuthContext();

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => {
        signIn({email: values.email, password: values.password});
      }}
      validationSchema={validationSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <InputBasic
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            label="Email"
            placeHolder="example@mail.com"
            errorMsj={(touched.email && errors.email) || ''}
          />

          <InputBasic
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            label="Password"
            placeHolder=""
            errorMsj={(touched.password && errors.password) || ''}
            secureTextEntry
          />
          <BottomBasic text="Login" onPress={handleSubmit} />
          <View style={{width: '100%'}}>
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
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 30,
    gap: 30,
  },
  modal: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 6,
  },
});
