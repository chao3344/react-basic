import React, {Component,createRef} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.inputRef = createRef()
    }
    state = {
        // keyword:'',
        arr:['a','b']
    }
    handelChange(e){
        // let value = e.target.value
        /* this.setState({
            keyword: e.target.value,
            arr:[
                ...this.state.arr,
        
        return (
            <>
                <input 
                    ref={this.inputRef}
                    value={this.state.keyword}
                    onChange={this.handelChange.bind(this)}
                    onKeyUp={this.HandelOnkeyUp.bind(this)} 
                
                type="text"/>

                {
                    this.state.arr.map((value,index)=>{
                        return <span key={value+index}>{value}</span>
                    })
                }
            </>    
            
        )
    }
}

export {Form} 
