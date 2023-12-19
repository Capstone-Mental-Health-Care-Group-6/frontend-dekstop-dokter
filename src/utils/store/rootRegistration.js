// rootReducer.js
import { combineReducers } from 'redux';
import registrationReducer from '../../service/registrationReducer';
import educationReducer from '../../service/educationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  education: educationReducer,
});

export default rootReducer;
