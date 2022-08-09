import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth, Dashboard, DrawerContent} from '../screens';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          component={DrawerNavigator}
          name="MainApp"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={Auth} name="Auth" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Dashboard} name="DrawerDashboard" />
    </Drawer.Navigator>
  );
}
