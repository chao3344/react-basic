import React, { Component } from 'react';
import { bindActionCreators } from 'redux'

import store from '../redux/counter/store'
import counterActionCreatores from '../redux/counter/action-creators/counter'

import Counter3 from './Counter3'

export default class Counter2 extends Component {
    state = {
        counter: store.getState().counter.count
    }

    constructor(){
        super()
        this.bac = bindActionCreators(counterActionCreatores,store.dispatch)
    }
    render() {

        console.log(this.bac)
        
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>+</button>
                <Counter3 {...this.bac}></Counter3>
            </div>
        );
    }
}
