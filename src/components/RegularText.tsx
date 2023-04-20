// Outer imports:
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface RegularTextProps {
  content: string | null;
  numberOfLines?: number;
}

const RegularText = ({content, numberOfLines}: RegularTextProps) => {
  const isHebrew = i18n.locale === HE;
  return (
    <Text style={[styles(isHebrew).text]} numberOfLines={numberOfLines}>
      {content}
    </Text>
  );
};

export default RegularText;

const styles = (isHebrew: boolean) => {
  return StyleSheet.create({
    text: {
      fontFamily: isHebrew ? Fonts.RUBIK : Fonts.MONTSERRAT,
      textAlign: 'center',
    },
  });
};
