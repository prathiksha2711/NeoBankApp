import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import CardScreen from './src/screens/CardScreen';
import SendRequestScreen from './src/screens/SendRequestScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 32,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282"
      const size = 24

      switch (route.name) {
        case "Payments":
          icon = "payment";
          break;
        case "Home":
          icon = "home";
          break;
        case "Expenses":
          icon = "attach-money";
          break;
        default:
          icon = "person"
      }
      return <MaterialIcons name={icon} size={size} color={color} />;
    },
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="Payments" component={SendRequestScreen} />
        <TabStack.Screen name="Expenses" component={CardScreen} />
        <TabStack.Screen name="Profile" component={ProfileScreen} />
      </TabStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false // Use this instead of headerMode="none"
        }}
      >
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name='Tabs' component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
