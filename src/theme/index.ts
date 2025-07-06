export const COLORS = {
  // Primary brand colors
  primary: '#E10600',
  secondary: '#15151E',
  
  // UI colors
  background: '#FFFFFF',
  card: '#FFFFFF',
  text: '#15151E',
  textSecondary: '#8E8E8E',
  border: '#E5E5E5',
  notification: '#E10600',
  
  // States
  success: '#27AE60',
  warning: '#F2C94C',
  error: '#EB5757',
  
  // Other
  white: '#FFFFFF',
  black: '#000000',
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  bold: {
    fontFamily: 'System',
    fontWeight: '700',
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const SIZES = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  body: 14,
  small: 12,
  tiny: 10,
  radius: 8,
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

export default {
  COLORS,
  FONTS,
  SPACING,
  SIZES,
  SHADOWS,
}; 