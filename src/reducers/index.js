
import { combineReducers } from 'redux'

const test = (state = {}, action) => {

  switch (action.type){

    case 'TEST_REQUEST':
      console.log('starting req');
      return state

  }
  return state
}

const rootReducer = combineReducers({
  test,
})

export default rootReducer
