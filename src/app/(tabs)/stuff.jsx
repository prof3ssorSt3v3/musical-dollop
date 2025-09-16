import { View, Text } from 'react-native';
import { styles } from '../../theme/styles';

export default function Page(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Stuff Page</Text>
      <Text style={styles.txt}>Welcome to the Tab Stuff Page</Text>
    </View>
  );
}
