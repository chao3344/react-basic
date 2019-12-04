import React,{Component} from 'react'
import {Form} from './Form'
import List from './List'

class TodoList extends Component{
    state = {
        keyword:'abc',
        initValue:'--abc'
    }

    Receiveword(keyword){
        this.setState({
            keyword
        })
    }
    render(){
        return(
            <>
                <Form OnReceiveword={this.Receiveword.bind(this)}>
                    initValue={this.state.initValue}
                </Form>
                <List form={<Form/>} keyword={this.state.keyword}></List>
                
            </>
        )
    }
}

export default TodoList
