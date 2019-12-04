import React, { Component } from 'react';

import Header from './Header'
import hoc from './hoc';

class Hoc extends Component {

    state = {
        title: 'hello'
    }

    handleClick = () => {
        this.setState({
            title:'world'
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header title={this.state.title}></Header>
                <button onClick={this.handleClick}>change title</button>
            </div>
        );
    }
}

// 导出的还是一个组件
export default hoc(Hoc);