import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Race } from '../types';

// Main stack params
export type RootStackParamList = {
  MainTabs: undefined;
  RaceDetail: { race: Race };
  SessionDetail: { raceId: string; sessionId: string };
  Notifications: undefined;
  Settings: undefined;
};

// Bottom tab params
export type MainTabParamList = {
  Calendar: undefined;
  Standings: undefined;
  Live: undefined;
  Profile: undefined;
};

// Navigation prop types
export type CalendarScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Calendar'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type StandingsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Standings'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type LiveScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Live'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type RaceDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RaceDetail'
>;

export type SessionDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SessionDetail'
>;

export type NotificationsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>; 