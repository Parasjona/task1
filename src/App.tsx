import { T } from '@admiral-ds/react-ui';
import './App.css';
import { Page, Header, Actions, List, PlaceholderCard, PlaceholderHeader, PlaceholderLine } from './styled';


function App() {
  return (
    <Page>
      <Header>
        <div>
          <T font="Header/H3" as="h1" style={{ margin: 0 }} color="Neutral/Neutral 70">
            {/* Добавьте сюда заголовок страницы */}
          </T>
        </div>
        <Actions>{/* Добавьте сюда Button и Link */}</Actions>
      </Header>
      <List aria-label="Пример списка заявок">
        <PlaceholderCard>
          <PlaceholderHeader>
            <PlaceholderLine $width="32%" />
            <PlaceholderLine $width="18%" />
          </PlaceholderHeader>
          <PlaceholderLine $width="72%" />
          <PlaceholderLine $width="54%" />
        </PlaceholderCard>
        <PlaceholderCard>
          <PlaceholderHeader>
            <PlaceholderLine $width="32%" />
            <PlaceholderLine $width="18%" />
          </PlaceholderHeader>
          <PlaceholderLine $width="72%" />
          <PlaceholderLine $width="54%" />
        </PlaceholderCard>
        <PlaceholderCard>
          <PlaceholderHeader>
            <PlaceholderLine $width="32%" />
            <PlaceholderLine $width="18%" />
          </PlaceholderHeader>
          <PlaceholderLine $width="72%" />
          <PlaceholderLine $width="54%" />
        </PlaceholderCard>
      </List>
    </Page>
  );
}

export default App;
