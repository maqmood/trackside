import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dummyRaces } from '../data/dummyData';
import { COLORS, FONTS, SPACING, SIZES, SHADOWS } from '../theme';
import { CalendarScreenNavigationProp } from '../navigation/types';

const CalendarScreen = () => {
  const navigation = useNavigation<CalendarScreenNavigationProp>();
  
  const renderRaceItem = ({ item: race }) => {
    const date = new Date(race.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    });
    
    return (
      <TouchableOpacity
        style={styles.raceCard}
        onPress={() => navigation.navigate('RaceDetail', { race })}
      >
        <View style={styles.raceHeader}>
          <View style={styles.roundContainer}>
            <Text style={styles.roundText}>R{race.round}</Text>
          </View>
          <Text style={styles.raceDate}>{formattedDate}</Text>
        </View>
        
        <Text style={styles.raceName}>{race.name}</Text>
        <Text style={styles.raceCircuit}>{race.circuit}</Text>
        
        <View style={styles.sessionContainer}>
          {race.sessions.map((session) => {
            const sessionDate = new Date(session.date);
            const sessionFormattedDate = sessionDate.toLocaleDateString('en-US', { 
              day: 'numeric', 
              month: 'short',
            });
            
            return (
              <View key={session.id} style={styles.sessionItem}>
                <Text style={styles.sessionName}>{session.name}</Text>
                <Text style={styles.sessionTime}>{sessionFormattedDate} {session.startTime.substring(0, 5)}</Text>
              </View>
            );
          })}
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Race Calendar</Text>
        <Text style={styles.subtitle}>Formula 1 - 2025 Season</Text>
      </View>
      
      <FlatList
        data={dummyRaces}
        renderItem={renderRaceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  listContent: {
    padding: SPACING.lg,
    paddingTop: SPACING.sm,
  },
  raceCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    ...SHADOWS.medium,
  },
  raceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  roundContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.xs / 2,
    paddingHorizontal: SPACING.sm,
    borderRadius: SIZES.radius / 2,
  },
  roundText: {
    color: COLORS.white,
    ...FONTS.bold,
    fontSize: SIZES.small,
  },
  raceDate: {
    ...FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.textSecondary,
  },
  raceName: {
    ...FONTS.bold,
    fontSize: SIZES.h4,
    color: COLORS.text,
    marginBottom: SPACING.xs / 2,
  },
  raceCircuit: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
  },
  sessionContainer: {
    marginTop: SPACING.sm,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.radius / 2,
    padding: SPACING.sm,
  },
  sessionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  sessionName: {
    ...FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.text,
  },
  sessionTime: {
    ...FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.textSecondary,
  },
});

export default CalendarScreen; 