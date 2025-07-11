import { Race, Driver, Team, UserPreferences } from '../types';

// Current date for reference
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Helper to get date string in ISO format
const getDateString = (year: number, month: number, day: number): string => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

// Dummy races data for 2025 F1 season
export const dummyRaces: Race[] = [
  {
    id: '1',
    name: 'Bahrain Grand Prix',
    circuit: 'Bahrain International Circuit',
    location: 'Sakhir',
    country: 'Bahrain',
    date: getDateString(currentYear, 3, 2),
    startTime: '15:00:00',
    endTime: '17:00:00',
    round: 1,
    sessions: [
      {
        id: '1-fp1',
        name: 'Practice 1',
        date: getDateString(currentYear, 3, 1),
        startTime: '12:30:00',
        endTime: '13:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 1)}T13:30:00`),
      },
      {
        id: '1-fp2',
        name: 'Practice 2',
        date: getDateString(currentYear, 3, 1),
        startTime: '16:00:00',
        endTime: '17:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 1)}T17:00:00`),
      },
      {
        id: '1-fp3',
        name: 'Practice 3',
        date: getDateString(currentYear, 3, 2),
        startTime: '12:30:00',
        endTime: '13:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 2)}T13:30:00`),
      },
      {
        id: '1-qualifying',
        name: 'Qualifying',
        date: getDateString(currentYear, 3, 2),
        startTime: '16:00:00',
        endTime: '17:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 2)}T17:00:00`),
      },
      {
        id: '1-race',
        name: 'Race',
        date: getDateString(currentYear, 3, 3),
        startTime: '15:00:00',
        endTime: '17:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 3)}T17:00:00`),
      },
    ],
  },
  {
    id: '2',
    name: 'Saudi Arabian Grand Prix',
    circuit: 'Jeddah Corniche Circuit',
    location: 'Jeddah',
    country: 'Saudi Arabia',
    date: getDateString(currentYear, 3, 9),
    startTime: '18:00:00',
    endTime: '20:00:00',
    round: 2,
    sessions: [
      {
        id: '2-fp1',
        name: 'Practice 1',
        date: getDateString(currentYear, 3, 8),
        startTime: '14:30:00',
        endTime: '15:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 8)}T15:30:00`),
      },
      {
        id: '2-fp2',
        name: 'Practice 2',
        date: getDateString(currentYear, 3, 8),
        startTime: '18:00:00',
        endTime: '19:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 8)}T19:00:00`),
      },
      {
        id: '2-fp3',
        name: 'Practice 3',
        date: getDateString(currentYear, 3, 9),
        startTime: '14:30:00',
        endTime: '15:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 9)}T15:30:00`),
      },
      {
        id: '2-qualifying',
        name: 'Qualifying',
        date: getDateString(currentYear, 3, 9),
        startTime: '18:00:00',
        endTime: '19:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 9)}T19:00:00`),
      },
      {
        id: '2-race',
        name: 'Race',
        date: getDateString(currentYear, 3, 10),
        startTime: '18:00:00',
        endTime: '20:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 10)}T20:00:00`),
      },
    ],
  },
  {
    id: '3',
    name: 'Australian Grand Prix',
    circuit: 'Albert Park Circuit',
    location: 'Melbourne',
    country: 'Australia',
    date: getDateString(currentYear, 3, 24),
    startTime: '05:00:00',
    endTime: '07:00:00',
    round: 3,
    sessions: [
      {
        id: '3-fp1',
        name: 'Practice 1',
        date: getDateString(currentYear, 3, 22),
        startTime: '03:30:00',
        endTime: '04:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 22)}T04:30:00`),
      },
      {
        id: '3-fp2',
        name: 'Practice 2',
        date: getDateString(currentYear, 3, 22),
        startTime: '07:00:00',
        endTime: '08:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 22)}T08:00:00`),
      },
      {
        id: '3-fp3',
        name: 'Practice 3',
        date: getDateString(currentYear, 3, 23),
        startTime: '03:30:00',
        endTime: '04:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 23)}T04:30:00`),
      },
      {
        id: '3-qualifying',
        name: 'Qualifying',
        date: getDateString(currentYear, 3, 23),
        startTime: '07:00:00',
        endTime: '08:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 23)}T08:00:00`),
      },
      {
        id: '3-race',
        name: 'Race',
        date: getDateString(currentYear, 3, 24),
        startTime: '05:00:00',
        endTime: '07:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 3, 24)}T07:00:00`),
      },
    ],
  },
  {
    id: '4',
    name: 'Japanese Grand Prix',
    circuit: 'Suzuka International Racing Course',
    location: 'Suzuka',
    country: 'Japan',
    date: getDateString(currentYear, 4, 14),
    startTime: '06:00:00',
    endTime: '08:00:00',
    round: 4,
    sessions: [
      {
        id: '4-fp1',
        name: 'Practice 1',
        date: getDateString(currentYear, 4, 12),
        startTime: '04:30:00',
        endTime: '05:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 4, 12)}T05:30:00`),
      },
      {
        id: '4-fp2',
        name: 'Practice 2',
        date: getDateString(currentYear, 4, 12),
        startTime: '08:00:00',
        endTime: '09:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 4, 12)}T09:00:00`),
      },
      {
        id: '4-fp3',
        name: 'Practice 3',
        date: getDateString(currentYear, 4, 13),
        startTime: '04:30:00',
        endTime: '05:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 4, 13)}T05:30:00`),
      },
      {
        id: '4-qualifying',
        name: 'Qualifying',
        date: getDateString(currentYear, 4, 13),
        startTime: '08:00:00',
        endTime: '09:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 4, 13)}T09:00:00`),
      },
      {
        id: '4-race',
        name: 'Race',
        date: getDateString(currentYear, 4, 14),
        startTime: '06:00:00',
        endTime: '08:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 4, 14)}T08:00:00`),
      },
    ],
  },
  {
    id: '5',
    name: 'Miami Grand Prix',
    circuit: 'Miami International Autodrome',
    location: 'Miami',
    country: 'United States',
    date: getDateString(currentYear, 5, 5),
    startTime: '20:30:00',
    endTime: '22:30:00',
    round: 5,
    sessions: [
      {
        id: '5-fp1',
        name: 'Practice 1',
        date: getDateString(currentYear, 5, 3),
        startTime: '18:30:00',
        endTime: '19:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 5, 3)}T19:30:00`),
      },
      {
        id: '5-fp2',
        name: 'Practice 2',
        date: getDateString(currentYear, 5, 3),
        startTime: '22:00:00',
        endTime: '23:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 5, 3)}T23:00:00`),
      },
      {
        id: '5-fp3',
        name: 'Practice 3',
        date: getDateString(currentYear, 5, 4),
        startTime: '16:30:00',
        endTime: '17:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 5, 4)}T17:30:00`),
      },
      {
        id: '5-qualifying',
        name: 'Qualifying',
        date: getDateString(currentYear, 5, 4),
        startTime: '20:00:00',
        endTime: '21:00:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 5, 4)}T21:00:00`),
      },
      {
        id: '5-race',
        name: 'Race',
        date: getDateString(currentYear, 5, 5),
        startTime: '20:30:00',
        endTime: '22:30:00',
        isCompleted: currentDate > new Date(`${getDateString(currentYear, 5, 5)}T22:30:00`),
      },
    ],
  },
];

// Dummy teams data
export const dummyTeams: Team[] = [
  { id: '1', name: 'Red Bull Racing', color: '#0600EF', points: 287 },
  { id: '2', name: 'Ferrari', color: '#DC0000', points: 265 },
  { id: '3', name: 'Mercedes', color: '#00D2BE', points: 187 },
  { id: '4', name: 'McLaren', color: '#FF8700', points: 173 },
  { id: '5', name: 'Aston Martin', color: '#006F62', points: 56 },
  { id: '6', name: 'Alpine', color: '#0090FF', points: 23 },
  { id: '7', name: 'Williams', color: '#005AFF', points: 21 },
  { id: '8', name: 'Racing Bulls', color: '#1E41FF', points: 7 },
  { id: '9', name: 'Sauber', color: '#900000', points: 0 },
  { id: '10', name: 'Haas', color: '#FFFFFF', points: 0 },
];

// Dummy drivers data
export const dummyDrivers: Driver[] = [
  { id: '1', name: 'Max Verstappen', number: 1, teamId: '1', nationality: 'Netherlands', abbreviation: 'VER', points: 169 },
  { id: '2', name: 'Sergio Perez', number: 11, teamId: '1', nationality: 'Mexico', abbreviation: 'PER', points: 118 },
  { id: '3', name: 'Charles Leclerc', number: 16, teamId: '2', nationality: 'Monaco', abbreviation: 'LEC', points: 146 },
  { id: '4', name: 'Carlos Sainz', number: 55, teamId: '2', nationality: 'Spain', abbreviation: 'SAI', points: 119 },
  { id: '5', name: 'Lewis Hamilton', number: 44, teamId: '3', nationality: 'United Kingdom', abbreviation: 'HAM', points: 111 },
  { id: '6', name: 'George Russell', number: 63, teamId: '3', nationality: 'United Kingdom', abbreviation: 'RUS', points: 76 },
  { id: '7', name: 'Lando Norris', number: 4, teamId: '4', nationality: 'United Kingdom', abbreviation: 'NOR', points: 113 },
  { id: '8', name: 'Oscar Piastri', number: 81, teamId: '4', nationality: 'Australia', abbreviation: 'PIA', points: 60 },
  { id: '9', name: 'Fernando Alonso', number: 14, teamId: '5', nationality: 'Spain', abbreviation: 'ALO', points: 41 },
  { id: '10', name: 'Lance Stroll', number: 18, teamId: '5', nationality: 'Canada', abbreviation: 'STR', points: 15 },
  { id: '11', name: 'Pierre Gasly', number: 10, teamId: '6', nationality: 'France', abbreviation: 'GAS', points: 13 },
  { id: '12', name: 'Esteban Ocon', number: 31, teamId: '6', nationality: 'France', abbreviation: 'OCO', points: 10 },
  { id: '13', name: 'Alex Albon', number: 23, teamId: '7', nationality: 'Thailand', abbreviation: 'ALB', points: 14 },
  { id: '14', name: 'Logan Sargeant', number: 2, teamId: '7', nationality: 'United States', abbreviation: 'SAR', points: 7 },
  { id: '15', name: 'Yuki Tsunoda', number: 22, teamId: '8', nationality: 'Japan', abbreviation: 'TSU', points: 7 },
  { id: '16', name: 'Daniel Ricciardo', number: 3, teamId: '8', nationality: 'Australia', abbreviation: 'RIC', points: 0 },
  { id: '17', name: 'Valtteri Bottas', number: 77, teamId: '9', nationality: 'Finland', abbreviation: 'BOT', points: 0 },
  { id: '18', name: 'Zhou Guanyu', number: 24, teamId: '9', nationality: 'China', abbreviation: 'ZHO', points: 0 },
  { id: '19', name: 'Kevin Magnussen', number: 20, teamId: '10', nationality: 'Denmark', abbreviation: 'MAG', points: 0 },
  { id: '20', name: 'Nico Hulkenberg', number: 27, teamId: '10', nationality: 'Germany', abbreviation: 'HUL', points: 0 },
];

// Default user preferences
export const defaultUserPreferences: UserPreferences = {
  enableNotifications: true,
  notifyBeforeRace: 60, // 60 minutes before race
  notifyBeforePractice: 30, // 30 minutes before practice
  notifyBeforeQualifying: 45, // 45 minutes before qualifying
  darkMode: false,
  hideSpoilers: false,
}; 