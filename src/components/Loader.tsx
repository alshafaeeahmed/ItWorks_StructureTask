import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

type Props = {
  text?: string | null;
};

const Loader: React.FC<Props> = ({text = null}: Props) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={'blue'} />
      {text && (
        <View style={styles.textContainer}>
          <RegularText
            children={text}
            size={16}
            color={'blue'}
            textAlign="center"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    paddingVertical: 24,
  },
});

export default Loader;
