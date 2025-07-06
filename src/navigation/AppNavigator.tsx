import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import CalendarScreen from '../screens/CalendarScreen';
import StandingsScreen from '../screens/StandingsScreen';
import LiveScreen from '../screens/LiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RaceDetailScreen from '../screens/RaceDetailScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Import types
import { MainTabParamList, RootStackParamList } from './types';

// Create navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Bottom Tab Navigator
function MainTabNavigator() {
  return (
    // @ts-ignore
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E10600',
        tabBarInactiveTintColor: '#8E8E8E',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5E5',
        },
      }}
    >
      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen 
        name="Standings" 
        component={StandingsScreen} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Standings',
        }}
      />
      <Tab.Screen 
        name="Live" 
        component={LiveScreen} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Live',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

// Root Stack Navigator
function AppNavigator() {
  return (
    // @ts-ignore
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E10600',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RaceDetail" 
          component={RaceDetailScreen} 
          options={({ route }) => ({ title: route.params.race.name })} 
        />
        <Stack.Screen 
          name="SessionDetail" 
          component={SessionDetailScreen} 
          options={{ title: 'Session Details' }} 
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ title: 'Notifications' }} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Settings' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; 