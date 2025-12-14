import { css } from '@emotion/react';

export const colorPalatte = css`
  :root {
    --white: #fff;
    --white30: #e9edf3;
    --black: #000;
    --black20: #282828;
    --gray10: #dedede;
    --gray50: #888;
    --pink: #f23d67;
    --pink20: #f8d4dd;
    --blue30: #7c8db5;
    --orange30: #ffb74d;
    --purple30: #b585ff;
    --green30: #7bc67b;
    --green50: #4db6ac;
    --brown30: #a1743eff;
    --background: #ebf1f8;
  }
`;

export const colors = {
  white: 'var(--white)',
  white30: 'var(--white30)',
  black: 'var(--black)',
  black20: 'var(--black20)',
  gray10: 'var(--gray10)',
  gray50: 'var(--gray50)',
  pink: 'var(--pink)',
  pink20: 'var(--pink20)',
  blue30: 'var(--blue30)',
  orange30: 'var(--orange30)',
  purple30: 'va(--purple30)',
  green30: 'var(--green30)',
  green50: 'var(--green50)',
  brown30: 'var(--brown30)',
  background: 'var(--background)',
};

export type Colors = keyof typeof colors;
