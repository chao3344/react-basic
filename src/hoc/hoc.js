import React, { Component } from 'react';

export default (Comp) => {
    return class extends Component{
        // 向props中挂载一个属性
        render(){
            return(
                <Comp title="hello"></Comp>
            )
        }
    }
}