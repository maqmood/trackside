import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';

const StandingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Standings</Text>
        <Text style={styles.subtitle}>Formula 1 - 2025 Season</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.comingSoon}>Driver and Constructor Standings Coming Soon</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  comingSoon: {
    ...FONTS.medium,
    fontSize: SIZES.h4,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default StandingsScreen; 