import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS, FONTS, SPACING, SIZES } from '../theme';
import { dummyRaces } from '../data/dummyData';

const SessionDetailScreen = () => {
  const route = useRoute();
  const { raceId, sessionId } = route.params as { raceId: string; sessionId: string };
  
  // Find the race and session from dummy data
  const race = dummyRaces.find(r => r.id === raceId);
  const session = race?.sessions.find(s => s.id === sessionId);
  
  if (!race || !session) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Session not found</Text>
      </View>
    );
  }
  
  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  
  const calculateSessionStatus = () => {
    const now = new Date();
    const sessionStartTime = new Date(`${session.date}T${session.startTime}`);
    const sessionEndTime = new Date(`${session.date}T${session.endTime}`);
    
    if (now > sessionEndTime) {
      return 'Completed';
    } else if (now >= sessionStartTime && now <= sessionEndTime) {
      return 'Live';
    } else {
      return 'Upcoming';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return COLORS.primary;
      case 'Completed':
        return COLORS.success;
      default:
        return COLORS.textSecondary;
    }
  };
  
  const sessionStatus = calculateSessionStatus();
  const statusColor = getStatusColor(sessionStatus);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.raceName}>{race.name}</Text>
        <Text style={styles.sessionName}>{session.name}</Text>
        
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, { color: statusColor }]}>{sessionStatus}</Text>
        </View>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>{formatDate(session.date)}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Time</Text>
          <Text style={styles.detailValue}>{formatTime(session.startTime)} - {formatTime(session.endTime)}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Circuit</Text>
          <Text style={styles.detailValue}>{race.circuit}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Location</Text>
          <Text style={styles.detailValue}>{race.location}, {race.country}</Text>
        </View>
      </View>
      
      {sessionStatus === 'Completed' && (
        <View style={styles.resultsContainer}>
          <Text style={styles.sectionTitle}>Results</Text>
          <Text style={styles.comingSoon}>Session results coming soon</Text>
        </View>
      )}
      
      {sessionStatus === 'Live' && (
        <View style={styles.liveContainer}>
          <Text style={styles.sectionTitle}>Live Timing</Text>
          <Text style={styles.comingSoon}>Live timing data coming soon</Text>
        </View>
      )}
      
      {sessionStatus === 'Upcoming' && (
        <View style={styles.upcomingContainer}>
          <Text style={styles.sectionTitle}>Countdown</Text>
          <Text style={styles.comingSoon}>Countdown feature coming soon</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  errorText: {
    ...FONTS.medium,
    fontSize: SIZES.h4,
    color: COLORS.error,
  },
  headerContainer: {
    backgroundColor: COLORS.secondary,
    padding: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  raceName: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.white,
    opacity: 0.8,
    marginBottom: SPACING.xs,
  },
  sessionName: {
    ...FONTS.bold,
    fontSize: SIZES.h1,
    color: COLORS.white,
    marginBottom: SPACING.sm,
  },
  statusContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    alignSelf: 'flex-start',
    borderRadius: SIZES.radius / 2,
  },
  statusText: {
    ...FONTS.bold,
    fontSize: SIZES.small,
  },
  detailsContainer: {
    padding: SPACING.lg,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  detailLabel: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
  },
  detailValue: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.text,
    textAlign: 'right',
    flex: 1,
    marginLeft: SPACING.md,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  resultsContainer: {
    padding: SPACING.lg,
    paddingTop: 0,
  },
  liveContainer: {
    padding: SPACING.lg,
    paddingTop: 0,
  },
  upcomingContainer: {
    padding: SPACING.lg,
    paddingTop: 0,
  },
  comingSoon: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    padding: SPACING.lg,
  },
});

export default SessionDetailScreen; 