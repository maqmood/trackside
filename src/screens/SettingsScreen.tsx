import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';
import { defaultUserPreferences } from '../data/dummyData';

const SettingsScreen = () => {
  const [preferences, setPreferences] = React.useState(defaultUserPreferences);

  const toggleDarkMode = () => {
    setPreferences({
      ...preferences,
      darkMode: !preferences.darkMode,
    });
  };

  const toggleSpoilers = () => {
    setPreferences({
      ...preferences,
      hideSpoilers: !preferences.hideSpoilers,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Use dark theme throughout the app</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={preferences.darkMode ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.border}
            onValueChange={toggleDarkMode}
            value={preferences.darkMode}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Hide Spoilers</Text>
            <Text style={styles.settingDescription}>Hide race results until you're ready</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={preferences.hideSpoilers ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.border}
            onValueChange={toggleSpoilers}
            value={preferences.hideSpoilers}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notification Settings</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clear Cache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sync Data</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Build</Text>
          <Text style={styles.infoValue}>2025.1</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Open Source Licenses</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedback</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rate the App</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  section: {
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  settingLabel: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  settingDescription: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.textSecondary,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  infoLabel: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  infoValue: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: SIZES.radius / 2,
    marginVertical: SPACING.sm,
    alignItems: 'center',
  },
  buttonText: {
    ...FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.body,
  },
});

export default SettingsScreen; 