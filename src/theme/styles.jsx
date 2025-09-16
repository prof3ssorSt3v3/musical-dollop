import { StyleSheet } from 'react-native';

const black = '#222';
const white = '#e4efef';
const primary = '#2268af';
const secondary = '#798693';
const action = '#599155';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: white,
  },
  title: {
    fontSize: 30,
    color: primary,
    textAlign: 'center',
    paddingBlock: 20,
    paddingInline: 10,
    fontFamily: 'Barrio',
  },
  txt: {
    fontSize: 18,
    color: secondary,
    padding: 10,
  },
  link: {
    fontSize: 18,
    color: action,
    padding: 10,
    textDecorationColor: action,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  button: {
    fontSize: 20,
    paddingInline: 10,
    paddingBlock: 5,
    margin: 10,

    borderRadius: 10,
    borderColor: action,
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export { styles, black, white, primary, secondary };
