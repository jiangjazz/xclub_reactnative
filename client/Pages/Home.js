import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Block, Line, Iconfont } from '../Components/index'

const DETAIL = {
  url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1805729765,2539360167&fm=173&app=25&f=JPEG?w=218&h=146&s=3B927CCD0EEBD95D5E2074390300D012',
  name: 'JazzJiang',
  desc: 'It S Hurricane Season But We Are now at china, hahahha'
}

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#00ADEF',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  render() {
    // set UI
    StatusBar.setBarStyle('light-content')

    return (
      <View style={styles.container}>

        <View style={{ height: 50, backgroundColor: '#00ADEF' }} />
        {/* 头部card */}
        <Block style={styles.topCard}>
          <View style={{ flexDirection: 'row', }}>
            <Image style={styles.headImage} source={{ url: DETAIL.url }} />
            <View style={styles.headDesc}>
              <Text style={{ marginTop: 4, fontSize: 16, fontWeight: 'bold', color: '#333333' }}>{DETAIL.name}</Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ marginTop: 8, fontSize: 12, color: '#aaaaaa' }}>{DETAIL.desc}</Text>
            </View>
            <TouchableOpacity underlayColor="white">
              <View style={styles.headIcon}>
                <Text style={{ paddingVertical: 4, color: 'white' }}>1231232</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 16, paddingRight: 16, flexDirection: 'row' }}>
            {
              items.map((item, index) => {
                if (item.type === 'line') {
                  return (
                    <Line key={index} length={36} paddingStart={20} />
                  )
                } else {
                  return (
                    <View style={{ flex: 1, alignItems: 'center', paddingVertical: 8, }} key={index}>
                      <Text style={{ fontSize: 18 }}>{item.number}</Text>
                      <Text style={{ marginTop: 4, fontSize: 12, color: '#aaaaaa' }}>{item.name}</Text>
                    </View>
                  )
                }
              })
            }
          </View>

        </Block>
        {/* 头部card end*/}

        <Block style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} underlayColor="white">

            <Iconfont backgroundColor={['#72B9F7', '#588FEB']} name="wallet" />
            <Text style={{ marginTop: 4, fontSize: 14, color: '#999999' }}>XGold</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} underlayColor="white">
            <Iconfont backgroundColor={['#FCA553', '#F77A41']} name="personal_wallet_p" />

            <Text style={{ marginTop: 4, fontSize: 14, color: '#999999' }}>Medals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} underlayColor="white">
            <Iconfont backgroundColor={['#57E0BB', '#2FCCA2']} name="personal_follow_c" />

            <Text style={{ marginTop: 4, fontSize: 14, color: '#999999' }}>Sgin</Text>
          </TouchableOpacity>
        </Block>
        
      </View>
    );
  }
}

const items = [
  {
    type: 'ct',
    name: 'Posts',
    number: 1
  },
  {
    type: 'line'
  },
  {
    type: 'ct',
    name: 'Favorites',
    number: 0
  },
  {
    type: 'line'
  },
  {
    type: 'ct',
    name: 'Following',
    number: 1
  },
  {
    type: 'line'
  },
  {
    type: 'ct',
    name: 'Followers',
    number: 0
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
  topCard: {
    marginTop: -40,
    paddingRight: 0
  },
  headImage: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  headDesc: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headIcon: {
    paddingHorizontal: 8,
    width: 40,
    height: 24,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#43D2FF'
  }
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Home);