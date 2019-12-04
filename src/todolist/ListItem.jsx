import React from 'react'

export default (props) =>{
    return (
        <li>
            {props.value}
            <button style={{background:'yellowgreen',border:'none'}} 
            onClick={props.HandleDelete.bind(this,props.index)}>x</button>
                            
        </li>
    )
}