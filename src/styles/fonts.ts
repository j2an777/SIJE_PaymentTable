'use client';

import { css } from '@emotion/react';

export const fontFamily = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Pretendard', sans-serif;
  }
`;

export const typographyMap = {
  // Pretendard 폰트
  p1: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 38px;
    line-height: 57px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p2: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 32px;
    line-height: 48px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p3: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 24px;
    line-height: 28px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p4: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 22px;
    line-height: 26px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p5: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 20px;
    line-height: 24px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p6: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 18px;
    line-height: 22px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p7: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    line-height: 19px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p8: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    line-height: 17px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p9: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    line-height: 14px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p10: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 10px;
    line-height: 12px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
  p11: css`
    font-family: 'Pretendard', sans-serif;
    font-size: 8px;
    transform: skew(-0.001deg) rotate(0.04deg);
  `,
} as const;

export const bolderMap = {
  regular: css`
    font-family: 'Pretendard';
    font-weight: 400;
  `,
  medium: css`
    font-family: 'Pretendard';
    font-weight: 500;
  `,
  semibold: css`
    font-family: 'Pretendard';
    font-weight: 600;
  `,
  bold: css`
    font-family: 'Pretendard';
    font-weight: 700;
  `,
} as const;

export type TypoType = keyof typeof typographyMap;
export type BoldType = keyof typeof bolderMap;
