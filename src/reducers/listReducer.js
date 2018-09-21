import initialState from "./initialState";
import {FETCH_LIST, GET_COUNT} from '../actions/actionTypes';


export default function Users(state = initialState, action) {
  let newState = {};
  switch(action.type){
    case FETCH_LIST:
      newState.list = action.users.map(item => {
        item.count = 0;
        return item;
      });
      return newState;
    case GET_COUNT:
      newState.list = state.list.map(item => {
          if (item.id === action.data.id) {
            item.count = action.data.count;
          }
          return item;
        });
      return newState;
    default:
      return state;
  }
}