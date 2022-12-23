import { combineReducers, createStore } from 'redux'
import { handleCart } from './handleCart'

const rootReducers = combineReducers({
  handleCart,
})

const store = createStore(rootReducers)

export default store
