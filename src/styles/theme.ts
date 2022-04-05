export const theme = {
  colors: {
    primaryColor: '#000',
    secondaryColor: '#777',
    white: '#FFFFFF',
    mediumGray: '#BBB',
    placeholder: '#ccc',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '0.875rem', // 14px
      small: '1rem', // 16px
      medium: '1.125rem', // 18px
      large: '1.375rem', // 22px
    },
  },
  media: {
    lteMedium: '(max-width: 1024px)',
    lteLarge: '(min-width: 1024px)',
    hgtLarge: '(max-heigth: 1000px)',
    hgtMinimun: '1000px',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
  },
} as const;
