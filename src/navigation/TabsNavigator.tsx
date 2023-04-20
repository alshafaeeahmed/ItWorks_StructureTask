import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.PROFILE}
      backBehavior="history">
      <Tab.Screen
        name={TabsScreens.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
