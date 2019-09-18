import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  $inputSelectorColor: 'black',
  $buttonUnderlayColor: '$medGray',

  inputBoxContainer: {
    backgroundColor: '$lightGray',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  inputContainer: {
    height: INPUT_HEIGHT,
    flex: 25,
    fontSize: 20,
    paddingHorizontal: 8
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  },
  // for touchableHighlight to show borderRadius
  touchHighlight: {

    height: INPUT_HEIGHT,
  },
  separator: {
    backgroundColor: '$medGray',
    height: INPUT_HEIGHT,
    flex: 0.05,
  }
});