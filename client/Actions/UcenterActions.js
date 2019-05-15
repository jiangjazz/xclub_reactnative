import { UCENTER_SET_UID, UCENTER_SET_USERMSG } from './types';

export const setUid = (uid) => (
  {
    type: UCENTER_SET_UID,
    payload: uid,
  }
);

export const setUsermsg = (usermsg) => (
  {
    type: UCENTER_SET_USERMSG,
    payload: usermsg,
  }
);