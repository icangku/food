import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import './globals.css';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "QuickSand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-light": require("../assets/fonts/Quicksand-Light.ttf"),
    "QuickSand-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  })

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  return <Stack screenOptions={{ headerShown: false }} />;
}
