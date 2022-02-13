import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App from '../App'
import reducer from './reducer'
function Redux()
{
    return <Provider store={createStore(reducer,applyMiddleware(thunk))}>
        <App/>
    </Provider>
}
export default Redux