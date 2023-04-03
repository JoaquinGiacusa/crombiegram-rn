import FloatingLabelInput from '@src/ui/input/FloatingLabelInput';
import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native';

// import FormContainer from './FormContainer';
import FormSubmitButton from './formSubmitButton';

// import FormSubmitButton from '@src/components/';

const LoginForm = () => {
  //   const {setIsLoggedIn, setProfile} = useLogin();

  //   const [userInfo, setUserInfo] = useState({
  //     email: '',
  //     password: '',
  //   });

  const [error, setError] = useState('');

  //   const {email, password} = userInfo;

  //   const handleOnChangeText = (value, fieldName) => {
  //     setUserInfo({...userInfo, [fieldName]: value});
  //   };

  //   const isValidForm = () => {
  //     if (!isValidObjField(userInfo))
  //       return updateError('Required all fields!', setError);

  //     if (!isValidEmail(email)) return updateError('Invalid email!', setError);

  //     if (!password.trim() || password.length < 8)
  //       return updateError('Password is too short!', setError);

  //     return true;
  //   };

  //   const submitForm = async () => {
  //     if (isValidForm()) {
  //       try {
  //         const res = await client.post('/sign-in', {...userInfo});

  //         if (res.data.success) {
  //           setUserInfo({email: '', password: ''});
  //           setProfile(res.data.user);
  //           setIsLoggedIn(true);
  //         }

  //         console.log(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  const [valueInput, setvalueInput] = useState<string>('');
  const [valueInput2, setvalueInput2] = useState<string>('');
  const handleTextChange = (newText: string) => setvalueInput(newText);
  const handleTextChange2 = (newText: string) => setvalueInput2(newText);

  return (
    <View style={styles.container}>
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
      <FormSubmitButton
        onPress={() => {}}
        title="Login"
        submitting={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    width: Dimensions.get('window').width,
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default LoginForm;
