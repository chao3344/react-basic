import React, {PureComponent} from 'react'

export default class Child extends PureComponent{
    constructor(){
        // 子类用来继承父元素的this，否则拿不到会报错
        super()
        console.log('constructor')

        this.state = {
            number: 3
        }
    }

    // 挂载时，更新数据，状态改变，都会走这个钩子
    // 静态方法，方法名前需加static，是挂载到实例上的
    // 使得某个属性的值来源于父组件
    static getDerivedStateFromProps(props,state){
        if( props.isShow !== state.isShow ){
            console.log(0)
            return{
                isShow:props.isShow
            }
        }
        return null
    }

    render(){
        console.log('render')
        return(
        <div>parent -- { JSON.stringify(this.props.isShow) }</div>
        )
    }

    async componentDidMount(){
        console.log('child componentDidMount')
        this.setState({
            number:2
        })

        setTimeout(() => {
            this.forceUpdate()
        }, 0);
    }

    getSnapshotBeforeUpdate() {
        return 22
    }


    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(snapshot)
        console.log('componentDidUpdate')
    }
}

