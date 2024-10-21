import { createStore } from 'redux';
import rootReducers from "./rootReducer"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine

const persistConfig = {
    key : 'root',
    storage,
    exReducer : ['experienceReducer']
}

const persistedReducer = persistReducer(persistConfig,rootReducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);