import { View, Text, Pressable } from 'react-native';
import { styles } from '../theme/styles';
import { Link, useRouter } from 'expo-router';

export default function Page(props) {
  const router = useRouter();
  let num = Math.floor(Math.random() * 100) + 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.txt}>Welcome to the App</Text>
      <Link style={styles.link} href={`/important?info=${num}`}>
        Somewhere important querystring
      </Link>
      <Link
        style={styles.link}
        href={{
          pathname: '/important',
          params: { info: num },
        }}
      >
        Somewhere important params
      </Link>
      <Pressable
        style={styles.button}
        onPress={() => {
          num = Math.floor(Math.random() * 100) + 100;
          router.navigate({ pathname: '/important', params: { info: num } });
          //note the extra object with pathname and params
          //instead of a string and object, like in React Navigation
          //the Link and the router.navigation can both use a querystring or object with pathname and params
        }}
      >
        <Text style={[styles.link, { textAlign: 'center', textDecorationLine: 'none' }]}>Somewhere important</Text>
      </Pressable>
      <Text style={styles.txt}>Note the custom font in the heading.</Text>
      <Text style={styles.txt}>Click the link in the header to visit the section of the app with tabs.</Text>
      <Text style={styles.txt}>Click the link or button in the body to visit the /important page with random data being passed to that page.</Text>
    </View>
  );
}
