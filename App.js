import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/screens/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
export default function App() {
  return (
    <Home>
      <Header><Text>KiviKivi</Text></Header>
      <Text>amo a kivi</Text>
      <Text>mi princesa</Text>
      <SuggestionList/>
    </Home>
  );
}

