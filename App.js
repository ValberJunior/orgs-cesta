import { StatusBar, SafeAreaView, Text } from 'react-native';
import { Cart } from './src/screens';
//intl
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
//fonts
import { useFonts,
         Montserrat_400Regular,
         Montserrat_700Bold } from '@expo-google-fonts/montserrat'
// mock
import mock from './src/mock/cartData';
//Expo SplashScreen
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

//init splashscreen
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [ fontLoaded ] = useFonts({
   "MontserratRegular": Montserrat_400Regular,
   "MontserratBold": Montserrat_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if(!fontLoaded){
    return null;
  }

  return <SafeAreaView 
    onLayout={onLayoutRootView}
    style={{ flex: 1  }}
    >
  <StatusBar/>
  <Cart {...mock} />
  </SafeAreaView>;
}
