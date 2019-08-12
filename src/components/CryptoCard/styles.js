import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 60,
    paddingHorizontal:10,
    paddingVertical: 5
  },
  leftBlock: {
    flex: 3,
    flexDirection: 'row'
  },
  rightBlock: {
    flex: 2,
    flexDirection: 'column'
  },

  // containers in leftBlock
  iconContainer: {
    backgroundColor: 'blue',
    width: 50
  },
  coinIdContainer: {
    flex: 1,
  },
  symbolContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  // containers in rightBlock
  latestPriceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  percentChangeContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  // CryptoCard texts
  symbolText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 5
  },
  latestPriceText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 5
  },
  percentChangeText: {
    fontSize: 16,
    textAlign: 'center',
    marginRight: 5
  },
  negative: {
    color: '$negativeChange',
  },
  positive: {
    color: '$positiveChange',
  },
});