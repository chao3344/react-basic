import React from 'react'

const Header = (props)=>{
    console.log(props)
    return(
        <div>   
            header
            {props.title}
        </div>
    )
}

// 高阶组件，当只没发生变化时，组件不渲染
export default React.memo(Header)