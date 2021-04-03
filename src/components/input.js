import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const MyCustomInput = ({ style, onChangeText, value, placeholder }) => {
  return (
    <TextInput
      style={[style, styles.inputStyle]}
      onChangeText={onChangeText}
      value={value}
      clearButtonMode={true}
      placeholder={placeholder}
    />
  );
};

export default MyCustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 0,
    borderBottomColor: "#9b59b6",
    borderBottomWidth: 1,
  },
});
