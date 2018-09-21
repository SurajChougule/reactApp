import * as types from './actionTypes';

export function receiveUsers(response) {
  return {
    type: types.FETCH_LIST,
    users: response
  }; 
}

export function getUsers() {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => dispatch(receiveUsers(response)));
  }
}


export function receiveCount(dataItems){
  return {
    type: types.GET_COUNT,
    data: dataItems
  }
}


export function getCount (count, id){
  let data = {count, id};
  return dispatch => {
    return dispatch(receiveCount(data));
  }
}