import { combineReducers } from 'redux';

import baseReducer from './BaseReducer';
import friendReducer from './FriendReducer';
import ucenterReducer from './UcenterReducer';

export default combineReducers({
  base: baseReducer,
  friends: friendReducer,
  ucenter: ucenterReducer,
});
