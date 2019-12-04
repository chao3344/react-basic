import React, {Component} from 'react'

import PropTypes from 'prop-types'
import ListItem from './ListItem'

class List extends Component{

    // 设置初始值，如果用户没有传值的话默认值为abc
    static defaultProps = {
        keyword:'abc'
    }

    设置必须为string
    static propTypes = {
        keyword : PropTypes.string.isRequired
    }


    /* static propTypes = {
        keyword: function(props,propName,componentName){
            if( props.keyword !== 'abc' ){
                return new Error()
            }
            
        }
    } */

    // 规定必须是某个值，但不是默认值
    // static propTypes = {
    //     keyword : PropTypes.oneOf(['abc','def'])
    // }

    state = {
        List:['li1','li2']
    }

    UNSAFE_componentWillReceiveProps (data){
        this.setState({
            List:[
                ...this.state.List,
                data.keyword
            ]
        })
        
    }
    HandleClick(index){
        
        this.state.List.splice(index,1)
        this.setState({})
    }

    render(){
        return(
            <ul>
                {
                    this.state.List.map((value,index) => {
                        return(
                            <ListItem
                                key={value+index}
                                value={value}
                                HandleDelete={this.HandleClick.bind(this)}
                            ></ListItem>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List
