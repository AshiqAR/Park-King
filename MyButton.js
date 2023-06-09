import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const MyButton = (props) => {
    const { onPress, title = 'Save',buttonStyle=styles.button,textStyle=styles.text } = props;
    return (
        <Pressable style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default MyButton;