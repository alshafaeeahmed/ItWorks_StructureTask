import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const ActionButton = ({onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      {/* some code */}
      {/* some more code */}
    </Pressable>
  );
};

export default ActionButton;
