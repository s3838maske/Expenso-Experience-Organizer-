import { combineReducers } from 'redux';
import experienceReducer from './Experience/experience.Reducer';

const rootReducers = combineReducers({
    exReducer : experienceReducer
});

export default rootReducers;