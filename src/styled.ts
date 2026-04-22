import type { Theme } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const admiralColorVar =
  (cssVarName: string, fallback: (theme: Theme) => string) =>
  (props: { theme: Theme }) =>
    `var(${cssVarName}, ${fallback(props.theme)})`;

export const Page = styled.main`
  min-height: 100vh;
  box-sizing: border-box;
  padding: 32px;
  background: ${admiralColorVar('--admiral-color-Neutral_Neutral00', (theme) => theme.color['Neutral/Neutral 00'])};
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const PlaceholderCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid ${admiralColorVar('--admiral-color-Neutral_Neutral20', (theme) => theme.color['Neutral/Neutral 20'])};
  border-radius: 12px;
  background: ${admiralColorVar('--admiral-color-Special_ElevatedBG', (theme) => theme.color['Special/Elevated BG'])};
`;

export const PlaceholderLine = styled.div<{ $width: string }>`
  height: 12px;
  width: ${(props) => props.$width};
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    ${admiralColorVar('--admiral-color-Neutral_Neutral30', (theme) => theme.color['Neutral/Neutral 30'])} 0%,
    ${admiralColorVar('--admiral-color-Neutral_Neutral20', (theme) => theme.color['Neutral/Neutral 20'])} 100%
  );
`;

export const PlaceholderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;
