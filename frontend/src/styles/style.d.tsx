import { MainTheme } from '../theme';

type mainThemeType = typeof MainTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends mainThemeType {}
}
