import React, { Component } from 'react';

import { colorContext } from './color_context'

export default class ChildHood extends Component {

    // 定义一个静态属性，直接绑定在类上，可以通过累来直接访问该属性
    static contextType = colorContext

    // 函数柯里化，函数返回值为函数
    // 可以使用此方法进行传参
    handleClick = (green) =>() => {
        this.context.changeColor(green)
    }

    render() {
        let {color} = this.context
        return (
            <div style={{color}}>
                ChildHood
                <button onClick={this.handleClick('green')}>change color</button>
            </div>
        );
    }
}

