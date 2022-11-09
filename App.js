import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FirstNav } from './src/navigate/FirstNav';


const App = () => {
  return (
    <NavigationContainer>
      <FirstNav></FirstNav>
    </NavigationContainer>
  );
};

export default App;
