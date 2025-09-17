import { Stack, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
//loading fonts hook. Add font to app.json too
import * as SplashScreen from 'expo-splash-screen';
//interacting with splashscreen
import { useEffect } from 'react';
import { Button } from 'react-native';
import { styles, black, white, primary, secondary, action } from '../theme/styles';

SplashScreen.preventAutoHideAsync(); //allow us to control when the page shows

export default function RootLayout() {
  const router = useRouter();

  const [loaded] = useFonts({
    Barrio: require('../../assets/fonts/Barrio-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 4000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            <Button
              color={action}
              onPress={() => {
                router.navigate('/stuff');
              }}
              title="Stuff"
            />
          ),
        }}
      />
      <Stack.Screen name="(tabs)" options={{ title: '' }} />
    </Stack>
  );
}
