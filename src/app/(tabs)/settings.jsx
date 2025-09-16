import { View, Text } from 'react-native';
import { styles } from '../../theme/styles';

export default function Page(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Page</Text>
      <Text style={styles.txt}>Welcome to the Tab Settings page</Text>
    </View>
  );
}
