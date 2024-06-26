import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TopBar from '../../components/Home/TopBar/TopBar.tsx';
import {HomeInfo} from '../../container/Home/HomeInfo/HomeInfo.tsx';

export function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TopBar title={'Clientes'} />
      <HomeInfo />
    </SafeAreaView>
  );
}
