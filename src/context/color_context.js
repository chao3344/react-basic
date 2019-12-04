import React,{ createContext,Component } from 'react'


// 创建一个context
const colorContext = createContext()


const{
    Provider,
    Consumer:MyConsumer,

}= colorContext


class MyProvider extends Component{
    constructor(){
        super()
        this.state = { 
            color:'red'
        }
    }

    changeColor = (color) => {
        this.setState({
            color
        })
    }

    render(){
        return(
            <Provider
                value={{
                    color:this.state.color,
                    changeColor:this.changeColor
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}


export{
    MyProvider,
    MyConsumer,
    colorContext
}