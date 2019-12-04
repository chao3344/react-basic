

// 合并中间键
const {combineReducers} = require ('redux')

const counter = require ('./reducers/counter')
const show = require  ('./reducers/show')

const reducer = combineReducers({
    counter,
    show
})

module.exports = reducer