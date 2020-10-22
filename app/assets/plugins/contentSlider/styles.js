/*
* Cellcard Selfcare Application 30.6.2019
* Copyright © 2019 Cellcard. All rights reserved.
 */


import { StyleSheet, Dimensions } from 'react-native';
import colours from '../../../theme/colours';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 6
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 5,
    paddingBottom: 6,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  itemHeading: {
    color: 'gray',
    fontWeight: 'bold'
  },
  itemTextBody: {
    fontSize: 12
  },
  badge: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 12
  }
});

const slider = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    top: 0,
    left: 0
  },
  layoutIndicator: {
    height: 15,
    position: 'relative',
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 20
  },
  indicator: {
    margin: 3,
    opacity: 0.9
  },
  indicatorSelected: {
    opacity: 1
  },
  containerImage: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: 'transparent'
  },
  layoutText: {
    position: 'absolute',
    paddingHorizontal: 25,
    top: 210,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colours.BLACK,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Cellcard-Bold'
  },
  textCaption: {
    fontWeight: '400',
    fontSize: 14,
    color: colours.BLACK,
    width: '100%',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Cellcard-Light'
  },
  border: {
    display: 'flex',
    borderWidth: 1,
    borderTopColor: '#000',
    borderBottomColor: '#000',
    borderLeftColor: '#000',
    borderRightColor: '#000',
    backgroundColor: '#000',
    width: 25,
    height: 1,
    marginTop: 10,
    marginBottom: 12,
    marginLeft: (Dimensions.get('window').width - (68 + 15)) / 2
  }
});

export { styles, slider };
