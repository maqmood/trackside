import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SPACING, SIZES, SHADOWS } from '../theme';
import { RaceDetailScreenNavigationProp } from '../navigation/types';

const RaceDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<RaceDetailScreenNavigationProp>();
  const { race } = route.params as { race: any };
  
  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };
  
  const calculateSessionStatus = (session: any) => {
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
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.round}>Round {race.round}</Text>
        <Text style={styles.raceName}>{race.name}</Text>
        <Text style={styles.circuitName}>{race.circuit}</Text>
        <Text style={styles.location}>{race.location}, {race.country}</Text>
        
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {formatDate(race.date)}
          </Text>
        </View>
      </View>
      
      <View style={styles.sessionsContainer}>
        <Text style={styles.sectionTitle}>Weekend Schedule</Text>
        
        {race.sessions.map((session) => {
          const status = calculateSessionStatus(session);
          const statusColor = getStatusColor(status);
          
          return (
            <TouchableOpacity
              key={session.id}
              style={styles.sessionCard}
              onPress={() => 
                navigation.navigate('SessionDetail', { 
                  raceId: race.id, 
                  sessionId: session.id 
                })
              }
            >
              <View style={styles.sessionHeader}>
                <Text style={styles.sessionName}>{session.name}</Text>
                <Text style={[styles.sessionStatus, { color: statusColor }]}>{status}</Text>
              </View>
              
              <View style={styles.sessionDetails}>
                <Text style={styles.sessionDate}>{formatDate(session.date)}</Text>
                <Text style={styles.sessionTime}>
                  {formatTime(session.startTime)} - {formatTime(session.endTime)}
                </Text>
              </View>
              
              <TouchableOpacity 
                style={[
                  styles.notificationButton,
                  status === 'Completed' ? styles.notificationButtonDisabled : null,
                ]}
                disabled={status === 'Completed'}
              >
                <Text style={styles.notificationButtonText}>Set Notification</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </View>
      
      <View style={styles.circuitContainer}>
        <Text style={styles.sectionTitle}>Circuit Information</Text>
        <View style={styles.circuitInfoCard}>
          <Text style={styles.circuitInfo}>Length: 5.412 km</Text>
          <Text style={styles.circuitInfo}>Laps: 57</Text>
          <Text style={styles.circuitInfo}>Race Distance: 308.4 km</Text>
          <Text style={styles.circuitInfo}>Lap Record: 1:27.097 (Lewis Hamilton, 2024)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    backgroundColor: COLORS.primary,
    padding: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  round: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.white,
    opacity: 0.8,
    marginBottom: SPACING.xs,
  },
  raceName: {
    ...FONTS.bold,
    fontSize: SIZES.h1,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  circuitName: {
    ...FONTS.medium,
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  location: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.white,
    opacity: 0.8,
  },
  dateContainer: {
    position: 'absolute',
    bottom: -SPACING.lg,
    right: SPACING.lg,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    ...SHADOWS.medium,
  },
  dateText: {
    ...FONTS.bold,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  sessionsContainer: {
    padding: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  sectionTitle: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  sessionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sessionName: {
    ...FONTS.bold,
    fontSize: SIZES.h5,
    color: COLORS.text,
  },
  sessionStatus: {
    ...FONTS.medium,
    fontSize: SIZES.small,
  },
  sessionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  sessionDate: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.textSecondary,
  },
  sessionTime: {
    ...FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
  notificationButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.sm,
    borderRadius: SIZES.radius / 2,
    alignItems: 'center',
  },
  notificationButtonDisabled: {
    backgroundColor: COLORS.border,
  },
  notificationButtonText: {
    ...FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  circuitContainer: {
    padding: SPACING.lg,
    paddingTop: 0,
    marginBottom: SPACING.lg,
  },
  circuitInfoCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SPACING.md,
    ...SHADOWS.small,
  },
  circuitInfo: {
    ...FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
});

export default RaceDetailScreen; 