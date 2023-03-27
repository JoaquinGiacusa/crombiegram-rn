import {StyleSheet, View} from 'react-native';
import React from 'react';
import InputBasic from '@src/ui/input';
import BottomBasic from '@src/ui/bottom';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useAuthContext} from '@src/context/AuthContext';

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
  // const initialValues: LoginType = {email: '', password: ''};

  const {signIn} = useAuthContext();
  // joaquingiacusa@gmail.com
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
});
