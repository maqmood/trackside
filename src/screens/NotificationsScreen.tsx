import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';
import { dummyRaces } from '../data/dummyData';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = React.useState({
    race: true,
    qualifying: true,
    practice: false,
  });

  const [timeBeforeEvent, setTimeBeforeEvent] = React.useState({
    race: 60, // 1 hour
    qualifying: 30, // 30 minutes
    practice: 15, // 15 minutes
  });

  const toggleNotification = (type: 'race' | 'qualifying' | 'practice') => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <Text style={styles.sectionDescription}>
          Choose which session types you want to be notified about and how much time before the session.
        </Text>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Races</Text>
            <Text style={styles.settingDescription}>Be notified before each race</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={notifications.race ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.border}
            onValueChange={() => toggleNotification('race')}
            value={notifications.race}
          />
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Qualifying</Text>
            <Text style={styles.settingDescription}>Be notified before qualifying sessions</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={notifications.qualifying ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.border}
            onValueChange={() => toggleNotification('qualifying')}
            value={notifications.qualifying}
          />
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Practice</Text>
            <Text style={styles.settingDescription}>Be notified before practice sessions</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={notifications.practice ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.border}
            onValueChange={() => toggleNotification('practice')}
            value={notifications.practice}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <Text style={styles.sectionDescription}>
          Manage notifications for upcoming race weekends.
        </Text>

        {dummyRaces
          .filter(race => {
            const raceDate = new Date(race.date);
            const today = new Date();
            return raceDate > today;
          })
          .slice(0, 3)
          .map(race => (
            <View key={race.id} style={styles.eventItem}>
              <View>
                <Text style={styles.eventName}>{race.name}</Text>
                <Text style={styles.eventDate}>
                  {new Date(race.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </View>
              <TouchableOpacity style={styles.eventButton}>
                <Text style={styles.eventButtonText}>Manage</Text>
              </TouchableOpacity>
            </View>
          ))}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View All Events</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Options</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Test Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset All Notifications</Text>
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
    marginBottom: SPACING.xs,
  },
  sectionDescription: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
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
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  eventName: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  eventDate: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.textSecondary,
  },
  eventButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: SIZES.radius / 2,
  },
  eventButtonText: {
    ...FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: SIZES.radius / 2,
    marginTop: SPACING.md,
    alignItems: 'center',
  },
  buttonText: {
    ...FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.body,
  },
});

export default NotificationsScreen; 