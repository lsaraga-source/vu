// Point d'entrée principal de l'app — charge les fonts et lance la navigation
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import {
  useFonts,
  PlayfairDisplay_500MediumItalic,
  PlayfairDisplay_700BoldItalic,
} from '@expo-google-fonts/playfair-display';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsChargees] = useFonts({
    PlayfairDisplay_500MediumItalic,
    PlayfairDisplay_700BoldItalic,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    // On cache le splash dès que possible, fonts prêtes ou pas
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
