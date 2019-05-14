import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from '../../assets/font/iconfont.json';

const IconSet = createIconSet(glyphMap, 'Iconfont', 'Iconfont.ttf');


const styles = StyleSheet.create({
  iconView: {
    backgroundColor: '#999999',
    borderRadius: 25, 
    overflow: 'hidden'
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: 10,
    // fontSize: 30,
    borderRadius: 10
  }
});

class Iconfont extends Component {
  constructor(props) {
    super(props);
  }


  // 订阅类属性类型,检查属性类型
  static propTypes = {
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  }

  //  自定义属性，设置初始值
  static defaultProps = {
    backgroundColor: '#999999',
    color: 'white',
    size: 30,
    style: {}
  }

  render() {
    let { style, name, size, color, backgroundColor } = this.props
    
    if (typeof backgroundColor === 'string') {
      
      return (
        <View style={{...styles.iconView, backgroundColor}}>
          <IconSet style={{ ...styles.icon, ...style }} name={name} size={size} color={color} />
        </View>
      )
    } else {

      return (
        <LinearGradient style={styles.iconView} colors={backgroundColor}>
          <IconSet style={{ ...styles.icon, ...style }} name={name} size={size} color={color} />
        </LinearGradient>
      )
    }
    
  }
}

export default Iconfont;
// export default iconSet;

// export const Button = iconSet.Button;
// export const TabBarItem = iconSet.TabBarItem;
// export const TabBarItemIOS = iconSet.TabBarItemIOS;
// export const ToolbarAndroid = iconSet.ToolbarAndroid;
// export const getImageSource = iconSet.getImageSource;