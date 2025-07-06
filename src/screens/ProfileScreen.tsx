import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';
import { defaultUserPreferences } from '../data/dummyData';
import { ProfileScreenNavigationProp } from '../navigation/types';

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [preferences, setPreferences] = React.useState(defaultUserPreferences);

  const toggleNotifications = () => {
    setPreferences({
      ...preferences,
      enableNotifications: !preferences.enableNotifications,
    });
  };

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Your Settings & Preferences</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              trackColor={{ false: COLORS.border, true: COLORS.primary }}
              thumbColor={preferences.darkMode ? COLORS.white : COLORS.white}
              ios_backgroundColor={COLORS.border}
              onValueChange={toggleDarkMode}
              value={preferences.darkMode}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Hide Spoilers</Text>
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
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Enable Notifications</Text>
            <Switch
              trackColor={{ false: COLORS.border, true: COLORS.primary }}
              thumbColor={preferences.enableNotifications ? COLORS.white : COLORS.white}
              ios_backgroundColor={COLORS.border}
              onValueChange={toggleNotifications}
              value={preferences.enableNotifications}
            />
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Notifications')}
          >
            <Text style={styles.buttonText}>Manage Notifications</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: SPACING.lg + SPACING.md,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.h2,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h4,
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
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.text,
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

export default ProfileScreen; 