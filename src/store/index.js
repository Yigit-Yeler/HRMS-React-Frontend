import { createStore, combineReducers, applyMiddleware } from 'redux';
//import CounterReducer from './reducers/counter.js'
//import ItemReducer from './reducers/list'
import JobAdsReducer from './reducers/jobAd/jobAdList'
import JobAdReducer from './reducers/jobAd/jobAdById'
import CompanyReducer from './reducers/company/company'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    JobAdsReducer: JobAdsReducer,
    JobAdReducer: JobAdReducer,
    CompanyReducer: CompanyReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;