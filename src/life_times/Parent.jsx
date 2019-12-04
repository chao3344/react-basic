import React,{Component} from 'react'

import Child from './Child'

export default class Parent extends Component{
    state={
        dataList:['a','b'],
        isShow:true,
        value:{
            x:{
                y:0
            }
        }
    }

    render() {
        return (
            <Child isShow = {this.state.isShow}></Child>
        );
    }

    componentDidMount(){
        console.log('componentDidMount')

        
    }

    // 卸载时使用
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
}