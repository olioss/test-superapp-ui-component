import React from "react";
import { TouchableOpacity, Text } from 'react-native';

const UiButton = (props) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#d31145', padding: 10}} {...props}>
      <Text style={{color: '#ffffff'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default UiButton;
