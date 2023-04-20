// Outer imports:
import React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  ImageBackground,
  Pressable,
} from 'react-native';

interface Props {
  image: any;
  onPress: (event: GestureResponderEvent) => void;
}

const CategoryCard: React.FC<Props> = ({image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{opacity: 0.85}}
        style={styles.imageBackground}>
        {/* some code */}
      </ImageBackground>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'black',
    height: 100,
    marginVertical: 2,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 12,
    height: 100,
    overflow: 'hidden',
    width: '100%',
  },
});
