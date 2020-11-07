import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primaryLighter: string;
      primaryLight: string;
      primary: string;

      secondaryLighter: string;
      secondaryLight: string;
      secondary: string;

      primaryGradient: string;
      secondaryGradient: string;

      white: string;
      black: string;
      greenLight: string;
      green: string;
      purple: string;
      yellow: string;
      blue: string;
      red: string;

      grayLight: string;
      gray: string;
      grayDark: string;

      background: string;
      text: string;

      textInPrimary: string;
      textInSecondary: string;
    };
  }
}
