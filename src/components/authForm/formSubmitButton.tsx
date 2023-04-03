import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

type FormSubmitButton = {
  title: string;
  submitting: any;
  onPress: any;
};

const FormSubmitButton: React.FC<FormSubmitButton> = ({
  title,
  submitting,
  onPress,
}) => {
  const backgroundColor = submitting
    ? 'rgba(27,27,51,0.4)'
    : 'rgba(27,27,51,1)';

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, {backgroundColor}]}>
      <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormSubmitButton;
