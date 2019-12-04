// import { takeEvery,put } from 'redux-saga/effects'

const { takeEvery,put } = require ('redux-saga/effects')

// 中间键
module.exports = function *() {
    // 响应派发过来的信息
    // *相当于async,yield相当于await
    yield takeEvery('superData',function *(){
        let result = yield new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(1000)
            },2000)
        })

        // 接受传过来的类型并做出相应变化
        yield put({type:'loadData',data:result})
    })
}