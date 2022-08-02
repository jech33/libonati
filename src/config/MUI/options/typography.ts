import React from 'react';

/* eslint-disable no-unused-vars */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    subheading: React.CSSProperties;
    subheading2: React.CSSProperties;
    title: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    paragraph: React.CSSProperties;
    paragraphBig: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subheading?: React.CSSProperties;
    subheading2?: React.CSSProperties;
    title: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    paragraph: React.CSSProperties;
    paragraphBig: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subheading: true;
    subheading2: true;
    title: true;
    title2: true;
    title3: true;
    paragraph: true;
    paragraphBig: true;
    paragraphSmall: true;
  }
}

const weight = {
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  h3: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.75rem',
    fontWeight: weight.extraBold,
    lineHeight: '1.9375rem',
    letterSpacing: '0em',
  },
  h4: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5625rem',
    fontWeight: weight.extraBold,
    lineHeight: '2rem',
    letterSpacing: '0em',
  },
  h5: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.3125rem',
    fontWeight: weight.bold,
    lineHeight: '1.625rem',
    letterSpacing: '0em',
  },
  h6: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.125rem',
    fontWeight: weight.extraBold,
    lineHeight: '1.4375rem',
    letterSpacing: '0em',
  },
  subheading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem',
    fontWeight: weight.extraBold,
    lineHeight: '1.25rem',
    letterSpacing: '0em',
  },
  subheading2: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8438rem',
    fontWeight: weight.bold,
    lineHeight: '1.0625rem',
    letterSpacing: '0em',
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9375rem',
    fontWeight: weight.bold,
    lineHeight: '1.1875rem',
    letterSpacing: '0em',
  },
  title2: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9375rem',
    fontWeight: weight.semiBold,
    lineHeight: '1.1875rem',
    letterSpacing: '0em',
  },
  title3: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem',
    fontWeight: weight.extraBold,
    lineHeight: '1.25rem',
    letterSpacing: '-0.0187rem',
  },
  body1: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9375rem',
    fontWeight: weight.medium,
    lineHeight: '1.1875rem',
    letterSpacing: '0em',
  },
  body2: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8125rem',
    fontWeight: weight.medium,
    lineHeight: '1rem',
    letterSpacing: '0em',
  },
  caption: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.75rem',
    fontWeight: weight.medium,
    lineHeight: '15px',
    letterSpacing: '0em',
  },
  paragraph: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8125rem',
    fontWeight: weight.normal,
    lineHeight: '1.0625rem',
    letterSpacing: '0em',
  },
  paragraphBig: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9375rem',
    fontWeight: weight.normal,
    lineHeight: '1.25rem',
    letterSpacing: '0em',
  },
  paragraphSmall: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.6875rem',
    fontWeight: weight.normal,
    lineHeight: '0.875rem',
    letterSpacing: '0em',
  },
};

export default typography;
