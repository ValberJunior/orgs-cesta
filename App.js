import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import { Cesta } from './src/screens';
//intl
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
//fonts
import { useFonts,
         Montserrat_400Regular,
         Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function App() {

  const [ fontLoaded ] = useFonts({
   "MontserratRegular": Montserrat_400Regular,
   "MontserratBold": Montserrat_700Bold
  });

  if(!fontLoaded){
    return <View>
      {/* Podemos colocar uma animacao ou um skeleton */}
      <Text>Carregando ...</Text>
    </View>
  }

  return <SafeAreaView>
  <StatusBar/>
  <Cesta/>
  </SafeAreaView>;
}
