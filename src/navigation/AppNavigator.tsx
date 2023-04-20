// Outer imports:
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <SafeAreaView
        style={styles.bottomAreaView}
        edges={['left', 'right', 'bottom']}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName={Screens.TABS}>
            <Stack.Screen
              name={Screens.TABS}
              component={TabsNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  bottomAreaView: {
    flex: 1,
  },
});
