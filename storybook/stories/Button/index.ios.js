import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';

export default function Button({ onPress, children }) {
  return <Pressable onPress={onPress}>{children}</Pressable>;
}

Button.defaultProps = {
  children: null,
  onPress: () => { }
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};
