import React, { Component } from 'react';

export default class Counter3 extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){
        
        let { increment } = this.props
        
        let result = increment()
        console.log(result)
    }

}

