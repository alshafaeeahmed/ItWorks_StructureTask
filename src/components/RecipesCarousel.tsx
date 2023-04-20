// Outer imports:
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// Inner imports:

interface Props {
  recipes: Recipe[];
}

const RecipesCarousel = ({recipes}: Props) => {
  const renderRecipeCard = (row: {item: Recipe; index: number}) => {
    return (
      <RecipeCard
        recipe={row.item}
        isLastIndex={row.index === recipes.length - 1}
        onPress={() => {
          console.log('pressed');
        }}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Recipe) => `${item.id}`}
        renderItem={renderRecipeCard}
      />
    </View>
  );
};

export default RecipesCarousel;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 12,
    backgroundColor: 'green',
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
});
