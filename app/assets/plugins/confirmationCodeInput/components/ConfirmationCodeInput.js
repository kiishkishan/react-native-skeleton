/*
* Cellcard Selfcare Application 31.6.2019
* Copyright © 2019 Cellcard. All rights reserved.
 */
import _ from 'lodash';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import LOGGER from '../../../../utilities/logger';

class ConfirmationCodeInput extends Component {
  static propTypes = {
    codeLength: PropTypes.number,
    compareWithCode: PropTypes.string,
    inputPosition: PropTypes.string,
    size: PropTypes.number,
    space: PropTypes.number,
    className: PropTypes.string,
    cellBorderWidth: PropTypes.number,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    ignoreCase: PropTypes.bool,
    autoFocus: PropTypes.bool,
    codeInputStyle: PropTypes.shape({}),
    containerStyle: PropTypes.shape({}),
    onFulfill: PropTypes.func
  };

  static defaultProps = {
    codeLength: 5,
    inputPosition: 'center',
    autoFocus: true,
    size: 40,
    className: 'border-box',
    cellBorderWidth: 1,
    activeColor: 'rgba(255, 255, 255, 1)',
    inactiveColor: 'rgba(255, 255, 255, 0.2)',
    space: 8,
    codeInputStyle: {},
    containerStyle: {},
    compareWithCode: '',
    onFulfill: () => { },
    ignoreCase: false
  };

  constructor(props) {
    super(props);

    const { codeLength } = this.props;

    this.state = {
      codeArr: new Array(codeLength).fill(''),
      currentIndex: 0
    };

    this.codeInputRefs = [];
  }

  componentDidMount() {
    const { compareWithCode, codeLength, inputPosition } = this.props;
    if (compareWithCode && compareWithCode.length !== codeLength) {
      LOGGER.error('Invalid props: compareWith length is not equal to codeLength');
    }

    if (_.indexOf(['center', 'left', 'right', 'full-width'], inputPosition) === -1) {
      LOGGER.error('Invalid input position. Must be in: center, left, right, full');
    }
  }

  clear(isFocusable) {
    const { codeLength } = this.props;
    this.setState({
      codeArr: new Array(codeLength).fill(''),
      currentIndex: 0
    });
    if (isFocusable) {
      this._setFocus(0);
    }
  }

  _setFocus(index) {
    if (this.codeInputRefs[index]) {
      this.codeInputRefs[index].focus();
    }
  }

  _blur(index) {
    if (this.codeInputRefs[index]) {
      this.codeInputRefs[index].blur();
    }
  }

  _onFocus(index) {
    const { codeArr } = this.state;
    const { onFocus } = this.props;
    const newCodeArr = _.clone(codeArr);
    const currentEmptyIndex = _.findIndex(newCodeArr, c => !c);
    if (currentEmptyIndex !== -1 && currentEmptyIndex < index) {
      return this._setFocus(currentEmptyIndex);
    }

    for (const i in newCodeArr) {
      if (i >= index) {
        newCodeArr[i] = '';
      }
    }

    this.setState({
      codeArr: newCodeArr,
      currentIndex: index
    });

    if (typeof onFocus === 'function') {
      onFocus();
    }
  }

  _isMatchingCode(code, compareWithCode, ignoreCase = false) {
    if (ignoreCase) {
      return code.toLowerCase() === compareWithCode.toLowerCase();
    }
    return code === compareWithCode;
  }

  _getContainerStyle(size, position) {
    switch (position) {
      case 'left':
        return {
          justifyContent: 'flex-start',
          height: size
        };
      case 'center':
        return {
          justifyContent: 'center',
          height: size
        };
      case 'right':
        return {
          justifyContent: 'flex-end',
          height: size
        };
      default:
        return {
          justifyContent: 'space-between',
          height: size
        };
    }
  }

  _getInputSpaceStyle(space) {
    const { inputPosition } = this.props;
    switch (inputPosition) {
      case 'left':
        return {
          marginRight: space
        };
      case 'center':
        return {
          marginRight: space / 2,
          marginLeft: space / 2
        };
      case 'right':
        return {
          marginLeft: space
        };
      default:
        return {
          marginRight: 0,
          marginLeft: 0
        };
    }
  }

  _getClassStyle(className, active) {
    const {
      cellBorderWidth, activeColor, inactiveColor, space
    } = this.props;
    const classStyle = {
      ...this._getInputSpaceStyle(space),
      color: activeColor
    };

    switch (className) {
      case 'clear':
        return _.merge(classStyle, { borderWidth: 0 });
      case 'border-box':
        return _.merge(classStyle, {
          borderWidth: cellBorderWidth,
          borderColor: active ? activeColor : inactiveColor
        });
      case 'border-circle':
        return _.merge(classStyle, {
          borderWidth: cellBorderWidth,
          borderRadius: 50,
          borderColor: active ? activeColor : inactiveColor
        });
      case 'border-b':
        return _.merge(classStyle, {
          borderBottomWidth: cellBorderWidth,
          borderColor: active ? activeColor : inactiveColor
        });
      case 'border-b-t':
        return _.merge(classStyle, {
          borderTopWidth: cellBorderWidth,
          borderBottomWidth: cellBorderWidth,
          borderColor: active ? activeColor : inactiveColor
        });
      case 'border-l-r':
        return _.merge(classStyle, {
          borderLeftWidth: cellBorderWidth,
          borderRightWidth: cellBorderWidth,
          borderColor: active ? activeColor : inactiveColor
        });
      default:
        return className;
    }
  }

  _onKeyPress(e) {
    if (e.nativeEvent.key === 'Backspace') {
      const { currentIndex } = this.state;
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      this._setFocus(nextIndex);
    }
  }

  _onInputCode(character, index) {
    const { codeLength, onFulfill } = this.props;
    const { codeArr, currentIndex } = this.state;
    const newCodeArr = _.clone(codeArr);
    newCodeArr[index] = character;

    LOGGER.info('newCodeArr', newCodeArr);

    const codeFormat = new RegExp(/^[0-9]/g);

    onFulfill('OTP_TYPING');

    if (codeFormat.test(character)) {
      if (index === codeLength - 1) {
        const code = newCodeArr.join('');
        onFulfill(code);
        this._blur(currentIndex);
      } else {
        this._setFocus(currentIndex + 1);
      }
      this.setState(prevState => ({
        codeArr: newCodeArr,
        currentIndex: prevState.currentIndex + 1
      }));
    } else {
      newCodeArr[index] = '';
      this.setState(prevState => ({
        codeArr: newCodeArr
      }));
      this._setFocus(currentIndex);
    }
  }

  updatRef(ref, id) {
    this.codeInputRefs[id] = ref;
  }

  _onTextChange = (word, index) => {
    const { onFulfill } = this.props;
    const wordArr = word.split('');

    LOGGER.info('_onTextChange::word', word);
    LOGGER.info('_onTextChange::index', index);
    LOGGER.info('_onTextChange::index', wordArr.length);

    const codeFormat = new RegExp(/^[0-9]/g);
    wordArr.filter(char => codeFormat.test(char));

    LOGGER.info('_onTextChange::postformat', wordArr.length);

    if (wordArr.length === 1) {
      this._onInputCode(wordArr[0], index);
    } else if (wordArr.length < 6) {
      this.setState({
        codeArr: wordArr,
        currentIndex: wordArr.length - 1
      });
    } else if (wordArr.length === 6) {
      this.codeInputRefs[0].blur();
      this.setState({
        codeArr: wordArr,
        currentIndex: wordArr.length - 1
      });

      setTimeout(() => {
        onFulfill(`${word}`.trim());
      }, 1000);
    } else {
      this._onInputCode(wordArr[0], index);
    }
  };

  render() {
    const {
      codeLength,
      codeInputStyle,
      containerStyle,
      inputPosition,
      autoFocus,
      className,
      size,
      activeColor
    } = this.props;

    const { currentIndex, codeArr } = this.state;

    const initialCodeInputStyle = {
      width: size,
      height: size
    };

    const codeInputs = [];
    for (let i = 0; i < codeLength; i++) {
      const id = i;
      codeInputs.push(
        <TextInput
          key={id}
          ref={ref => this.updatRef(ref, id)}
          style={[
            styles.codeInput,
            initialCodeInputStyle,
            this._getClassStyle(className, currentIndex === id),
            codeInputStyle
          ]}
          underlineColorAndroid="transparent"
          selectionColor={activeColor}
          {...this.props}
          keyboardType="numeric"
          autoFocus={autoFocus && id === 0}
          onFocus={() => this._onFocus(id)}
          value={codeArr[id] ? codeArr[id].toString() : ''}
          // onChangeText={text => this._onInputCode(text, id)}
          onChangeText={text => this._onTextChange(text, id)}
          onKeyPress={e => this._onKeyPress(e)}
        // maxLength={1}
        />
      );
    }

    return (
      <View
        style={[styles.container, this._getContainerStyle(size, inputPosition), containerStyle]}
      >
        {codeInputs}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  codeInput: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 0
  }
});

export default ConfirmationCodeInput;
