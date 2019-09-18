import EStyleSheet from 'react-native-extended-stylesheet';

const BUTTON_WIDTH = 80;
const BUTTON_HEIGHT = 48;

export default EStyleSheet.create({
  $buttonUnderlayColor: '$medGray',
  $iconSize: 28,

  container: {
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 4,
    borderWidth: 0.5,
    paddingRight: 3,    // without this padding, the icon is not centered
  },
  swapIcon: {
    transform: [{ rotate: '90deg' }]
  }
});