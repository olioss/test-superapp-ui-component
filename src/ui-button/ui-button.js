import React from "react";
import { TouchableOpacity, Text } from 'react-native';

const UiButton = (props) => {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default UiButton;
