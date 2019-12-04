import React, { Component } from 'react';

import storeContext from '../context/store_context'

export default class Counter extends Component {

    state = {
        counter:0
    }

    // 必须写，下面才能拿到实例
    static contextType = storeContext

    increment = ()=> {
        // 调用dispath方法，派发一个action
       
        this.context.dispatch({
            type:'increment'
        })
        console.log(this.context.getState())
    }

    componentDidMount(){
        console.log(this.context)
        this.context.subscribe(()=>{
            this.setState({
                // 发布者订阅者模式，可以做到随时监听
                counter:this.context.getState().counter
            })
        })
    }


    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

