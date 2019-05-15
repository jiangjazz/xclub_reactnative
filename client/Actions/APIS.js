import { Login, GetProfile } from '../config/apis'
import FetchData from '../Components/FetchData'
import * as UcenterAction from './UcenterActions'

/**
 * 登陆
 */
export const LoginFetch = ({ username = '', password = '' }): ActionAsync => {

  return (dispatch, getState) => {

    FetchData(Login, {
      method: 'post',
      params: {test: 1},
      body: { username, password }
    })
      .then(res => {

        if (Number(res.code) === 0 && res.data) {
          // 查询个人详细信息
          dispatch(getUsermsgFetch(res.data.Variables.member_uid))
          // 设置个人id
          dispatch(UcenterAction.setUid(res.data.Variables.member_uid))
          
        } else {
          console.warn('登录失败')
        }
      })
  }
}

/**
 * 获取个人信息
 */
export const getUsermsgFetch = (uid = null): ActionAsync => {

  return (dispatch, getState) => {

    FetchData(GetProfile, {
      params: { uid }
    })
      .then(res => {

        console.warn(res)
        if (Number(res.code) === 0 && res.data.Variables) {
          dispatch(UcenterAction.setUsermsg(res.data.Variables))
        } else {
          console.warn('获取个人信息失败')
        }
      })
  }
}