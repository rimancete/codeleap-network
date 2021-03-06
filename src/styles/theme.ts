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
      xxsmall: '0.75em', // 12px
      xsmall: '0.875em', // 14px
      small: '1em', // 16px
      medium: '1.125em', // 18px
      large: '1.375em', // 22px
    },
  },
  media: {
    lteXSmall: '(max-width: 500px)',
    lteSmall: '(max-width: 768px)',
    lteMinSmall: '(min-width: 768px)',
    lteMedium: '(max-width: 970px)',
    lteLarge: '(min-width: 1024px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
  },
} as const;
