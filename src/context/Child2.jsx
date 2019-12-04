import React, { Component } from 'react';
import ChildHood from './ChildHood'
import { MyConsumer } from './color_context'

export default class Child2 extends Component {
    render() {
        return (
            // 不写静态属性的话就需要consumer来帮助拿值
            <MyConsumer>
                {
                    value => (
                        <div style={{color:value.color}}>
                            Child2
                            <ChildHood></ChildHood>
                        </div>
                    )
                }
            </MyConsumer>
        );
    }
}
