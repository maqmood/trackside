import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';

const LiveScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Live Timing</Text>
        <Text style={styles.subtitle}>Formula 1 - 2025 Season</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.comingSoon}>Live Timing Coming Soon</Text>
        <Text style={styles.noSessionText}>No active session at the moment.</Text>
        <Text style={styles.noSessionText}>Check back during a race weekend!</Text>
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
    marginBottom: SPACING.md,
  },
  noSessionText: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
});

export default LiveScreen; 