const defaultState = {
    counter:0
}

// 纯函数
// const reducers = (state=defaultState,action) => {
//     switch (action.type){
//         case 'increment':
//             return{
//                 counter:state.counter + 1
//             }
//         case 'loadData':
//             return{
//                 counter:action.data
//             }
//         default:
//             return state
//     }
// }

// 合并中间键
const {combineReducers} = require ('redux')

const counter = require ('./counter')
const show = require  ('./show')

const reducers = combineReducers({
    counter,
    show
})

module.exports = reducers