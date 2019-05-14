import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({

});

class Line extends Component {
  constructor(props) {
    super(props);
  }

  // 订阅类属性类型,检查属性类型
  static propTypes = {
    lineDirection: PropTypes.string,
    length: PropTypes.number,
    paddingStart: PropTypes.number,
    paddingEnd: PropTypes.number,
    backgroundColor: PropTypes.string,
    lineColor: PropTypes.string,
  }

  //  自定义属性，设置初始值
  static defaultProps = {
    lineDirection: 'row',
    length: 16,
    paddingStart: 0,
    paddingEnd: 0,
    backgroundColor: 'white',
    lineColor: '#D3D3D3',
  }

  render() {
    // 打印出来, xmg
    console.log(this.props.name, 11111)
    if(this.props.lineDirection === 'row') {
      return (
        <View style={{ width: 0.5, height: this.props.length, backgroundColor: this.props.backgroundColor, paddingTop: this.props.paddingStart, paddingBottom: this.props.paddingEnd }} >
          <View style={{ flex: 1, backgroundColor: this.props.lineColor }} />
        </View>
      )
    } else {
      return (
        <View style={{ width: this.props.length, height: 0.5, backgroundColor: this.props.backgroundColor, paddingLeft: this.props.paddingStart, paddingRight: this.props.paddingEnd }} >
          <View style={{ flex: 1, backgroundColor: this.props.lineColor }} />
        </View>
      )
    }
  };
}


export default Line;
