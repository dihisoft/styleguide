import { DefaultTheme } from 'styled-components';

interface ColorType {
  bg: {
    primary: string;
  };
}

const light: ColorType = {
  bg: {
    primary: '#f5f5f5',
  },
};

const dark: ColorType = {
  bg: {
    primary: '#333',
  },
};

interface FontType {
  fontSizes: string[];
}
const font: FontType = {
  fontSizes: ['14px'],
};

export const lightTheme: DefaultTheme = {
  color: {
    ...light,
  },
  font: {
    ...font,
  },
};
export const darkTheme: DefaultTheme = {
  color: {
    ...dark,
  },
  font: {
    ...font,
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    font: FontType;
  }
}
