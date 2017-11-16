import UserReducer from './UserReducer';
import VoteReducer from './VoteReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  UserReducer,
  VoteReducer
})
