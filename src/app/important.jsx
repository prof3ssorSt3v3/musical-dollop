import { View, Text, Platform } from 'react-native';
import { styles, primary, action } from '../theme/styles';
import { useLocalSearchParams } from 'expo-router';

export default function Page(props) {
  const { info } = useLocalSearchParams();
  console.log(props); // {segment: "important"}
  console.log(info);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Important Page</Text>
      <Text
        style={[
          styles.txt,
          {
            fontFamily: 'Playfair',
            color: Platform.select({
              android: action,
              ios: primary,
            }),
          },
        ]}
      >
        There was some data sent from the Home page to here
      </Text>
      <Text style={styles.txt}>The data was: {info ? info : 'missing'}</Text>
    </View>
  );
}
