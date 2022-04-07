export const theme = {
  colors: {
    primaryColor: '#000',
    secondaryColor: '#777',
    white: '#FFFFFF',
    mediumGray: '#BBB',
    placeholder: '#ccc',
    modalBackground: 'rgba(119, 119, 119, 0.8)',
    cancel: '#AE3D01',
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: '0.875em', // 14px
      small: '1em', // 16px
      medium: '1.125em', // 18px
      large: '1.375em', // 22px
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
