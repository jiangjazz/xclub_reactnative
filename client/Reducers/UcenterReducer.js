import { UCENTER_SET_UID, UCENTER_SET_USERMSG } from '../Actions/types'

const INITIAL_STATE = {
  // uid
  uid: null,
  // 用户信息
  usermsg: {},
  // 用户详细信息
  userDetail: {},
  // 用户group相关数据
  group: {}
};

export default ucenterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UCENTER_SET_UID:
      let { uid } = state
      uid = action.payload || null
      return {
        ...state,
        uid
      };
    
    case UCENTER_SET_USERMSG:
      let { usermsg } = state
      usermsg = action.payload || {}
      userDetail = usermsg.space || {}
      return {
        ...state,
        usermsg,
        userDetail
      };

    default:
      return state;
  }
}
