import { type PropsWithChildren, useEffect, useState } from 'react';
import {
  DARK_THEME,
  DarkThemeCssVars,
  DropdownProvider,
  FontsVTBGroup,
  LIGHT_THEME,
  LightThemeCssVars,
} from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return LIGHT_THEME;
  }

  return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches ? DARK_THEME : LIGHT_THEME;
};

export function SystemThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY);

    const applyTheme = (matches: boolean) => {
      const nextTheme = matches ? DARK_THEME : LIGHT_THEME;
      setTheme(nextTheme);
      document.documentElement.style.colorScheme = nextTheme.name;
    };

    applyTheme(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      applyTheme(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {theme.name === 'dark' ? <DarkThemeCssVars /> : <LightThemeCssVars />}
      <DropdownProvider>
        <FontsVTBGroup />
        {children}
      </DropdownProvider>
    </ThemeProvider>
  );
}
