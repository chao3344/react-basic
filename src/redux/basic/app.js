const {
    createStore,
    applyMiddleware
} = require('redux')



const createSagaMiddleware = require('redux-saga').default
const sagaMiddleware = createSagaMiddleware()

const reducers = require('./reducers')

// 中间键，可以在中间键中完成一些比较复杂的业务需求
const mySaga = require('./mySaga')

// 先走reducers，再走中间键
const store = createStore(reducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)


store.subscribe(()=>{
    console.log(store.getState())
})

// 派发一个信息
store.dispatch({
    type:'superData'
})









