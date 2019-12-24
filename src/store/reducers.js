import { combineReducers } from 'redux'
import todoreducer from '@/store/todoredicer'
import showtypereducer from '@/store/showtypereducer'

export default combineReducers({
  todo: todoreducer,
  showType: showtypereducer
})

