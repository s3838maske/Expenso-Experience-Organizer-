import { combineReducers } from 'redux';
import experienceReducer from './ExperienceData/experienceReducer';
// import productReducer from './productReducer';

const rootReducers = combineReducers({
    exReducer : experienceReducer
    // product: productReducer,
    // Add other reducers here
});

export default rootReducers;