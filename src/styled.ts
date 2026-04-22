import styled from 'styled-components';

export const Page = styled.main`
  min-height: 100vh;
  box-sizing: border-box;
  padding: 32px;
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
  border: 1px solid #d9dde7;
  border-radius: 12px;
  background: #f5f7fa;
`;

export const PlaceholderLine = styled.div<{ $width: string }>`
  height: 12px;
  width: ${(props) => props.$width};
  border-radius: 999px;
  background: linear-gradient(90deg, #d7dde8 0%, #e8edf5 100%);
`;

export const PlaceholderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;