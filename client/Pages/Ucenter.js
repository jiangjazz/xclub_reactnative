import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, StatusBar, Image, TouchableOpacity, FlatList, TouchableHighlight, Modal, SafeAreaView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';

import { Icon } from '@ant-design/react-native';
import { connect } from 'react-redux';
import { Block, Line, Iconfont } from '../Components/index'


import { LogoutFetch, LoginFetch } from '../Actions/APIS';

import { formatEmoji } from '../common/method'


const DETAIL = {
  url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1805729765,2539360167&fm=173&app=25&f=JPEG?w=218&h=146&s=3B927CCD0EEBD95D5E2074390300D012',
  name: 'JazzJiang',
  desc: 'It S Hurricane Season But We Are now at china, hahahha'
}

class Ucenter extends Component {
  state = {
    modalVisible: false
  };

  static navigationOptions = {
    title: 'Ucenter',
    headerStyle: {
      backgroundColor: '#00ADEF',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    this.props.dispatch(LogoutFetch())
    this.props.dispatch(LoginFetch({ username: '111111', password: '111111' }))
  }

  render() {
    // set UI
    StatusBar.setBarStyle('light-content')

    return (
      <View style={styles.container}>

        <View style={{ height: 50, backgroundColor: '#00ADEF' }} />

        {/* 头部card */}
        {
          this.renderTopCard()
        }
        {/* 头部card end*/}

        {/* 跳转 */}
        {
          this.renderNav()
        }
        {/* 跳转 end*/}

        {/* actionList */}
        {
          this.renderActionList()
        }
        {/* actionList end*/}


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* close */}
            <TouchableHighlight
              style={{ position: 'absolute', top: 32, left: 10, zIndex: 2 }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Iconfont backgroundColor="white" color="#888" name="close" />
            </TouchableHighlight>
            {/* close end*/}

            <Icon name="account-book" size="md" color="red" />

          </SafeAreaView>
        </Modal>

      </View>
    );
  }

  renderActionList() {
    return (
      <Block style={{ padding: 0 }}>
        <FlatList
          data={[
            { icon: 'users', text: 'Invitation get XGold' },
            { icon: 'ranking', text: 'Ranking list' },
            { icon: 'setting', text: 'Settings' },
            { icon: 'video_o', text: 'Change Country' }
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            let borderBottomColor = (index === 3 ? '#ffffff' : '#cccccc');

            return (
              <TouchableHighlight
                underlayColor="white">
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Iconfont backgroundColor="white" color="#17BBEF" name={item.icon} size={20} padding={10} />
                  <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor }}>
                    <Text style={{ flex: 1, padding: 6, lineHeight: 26 }}>{item.text}</Text>
                    <Iconfont backgroundColor="white" color="#CCCCCC" name="crumbs_right" size={20} padding={10} />
                  </View>
                </View>
              </TouchableHighlight>
            )
          }}
        />
      </Block>
    )
  }

  renderTopCard() {
    const { ucenter: { usermsg, userDetail, uid }, base: { baseUrl } } = this.props
    console.log(this.props.ucenter)

    return (
      <Block style={styles.topCard}>
        <View style={{ flexDirection: 'row', }}>
          <Image style={styles.headImage} source={{ url: `${baseUrl}/uc_server/avatar.php?uid=${uid}&size=big` }} />
          <View style={styles.headDesc}>
            <Text style={{ marginTop: 4, fontSize: 16, fontWeight: 'bold', color: '#333333' }}>{usermsg.member_username}</Text>
            {
              !!userDetail.sightml ?
                (
                  <HTMLView style={{height: 16, overflow: 'hidden'}} value={`${formatEmoji(userDetail.sightml)}`} />
                )
                : (
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{ marginTop: 8, fontSize: 12, color: '#aaaaaa' }}>
                    'No relevant content'
                  </Text>
                )
            }
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
    )
  }

  renderNav() {
    return (
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
    )
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

const mapStateToProps = (state) => ({
  base: state.base,
  ucenter: state.ucenter
});

export default connect(
  mapStateToProps
)(Ucenter);