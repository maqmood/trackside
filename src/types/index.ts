export interface Race {
  id: string;
  name: string;
  circuit: string;
  location: string;
  country: string;
  date: string;
  startTime: string;
  endTime: string;
  sessions: Session[];
  round: number;
  flagImage?: string; // URL to country flag image
  circuitImage?: string; // URL to circuit layout image
}

export interface Session {
  id: string;
  name: string; // e.g., "Practice 1", "Qualifying", "Race"
  date: string;
  startTime: string;
  endTime: string;
  isCompleted: boolean;
}

export interface Driver {
  id: string;
  name: string;
  number: number;
  teamId: string;
  nationality: string;
  abbreviation: string;
  points: number;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  logo?: string;
  points: number;
}

export interface Notification {
  id: string;
  sessionId: string;
  raceName: string;
  sessionName: string;
  timeInMinutes: number; // Minutes before session start
  isEnabled: boolean;
}

export interface UserPreferences {
  enableNotifications: boolean;
  notifyBeforeRace: number; // Minutes before race
  notifyBeforePractice: number; // Minutes before practice
  notifyBeforeQualifying: number; // Minutes before qualifying
  darkMode: boolean;
  hideSpoilers: boolean;
} 