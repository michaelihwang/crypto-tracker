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
    flex: 7,
    flexDirection: 'row'
  },
  rightBlock: {
    flex: 3,
    flexDirection: 'column'
  },

  // containers in leftBlock
  rankContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    width: 32
  },
  coinIdContainer: {
    flex: 3
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
  rankText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 5
  },
  symbolText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10
  },
  nameText: {
    color: '$darkGray',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10
  },
  latestPriceText: {
    color: '$coinbase',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  percentChangeText: {
    fontSize: 16,
    textAlign: 'center'
  },
  negative: {
    color: '$negativeChange',
  },
  positive: {
    color: '$positiveChange',
  },
});