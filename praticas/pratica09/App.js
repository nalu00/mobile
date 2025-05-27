import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './routes/MainNavigator';

import { StoreProvider } from './contexts/StoreContext';

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        {MainNavigator}
        <MainNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
