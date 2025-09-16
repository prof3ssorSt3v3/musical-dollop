import { View, Text } from 'react-native';
import { styles } from '../../theme/styles';

export default function Page(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users Page</Text>
      <Text style={styles.txt}>Welcome to the Tab Users page</Text>
    </View>
  );
}
