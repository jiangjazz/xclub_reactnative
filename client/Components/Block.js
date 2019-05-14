import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10
  }
});

class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ ...styles.block, ...this.props.style }}>
        {this.props.children}
      </View >
    )
  }
}

export default Block;