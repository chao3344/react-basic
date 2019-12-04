import React from 'react'
import ReactDom from 'react-dom'

// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import TodoList from './todolist/TodoList'
// import Parent from './life_times/Parent'

// import{
//     MyProvider
// } from './context/color_context'

// import Parent from './context/Parent'

// import Hoc from './hoc/Hoc.jsx'

// import Counter2 from './counter/Counter2'
// import Counter1 from './counter/Counter1'


// import storeContext from './context/store_context'
// import store from './redux/counter/store'

import { BrowserRouter as Router } from 'react-router-dom'
import Index from './router/index'



ReactDom.render(
    // <>
    // <Header></Header>
    // <Footer></Footer>
    // </>,
    // <Fragment>
    //     <Header></Header>
    //     <Footer></Footer>
    // </Fragment>,

    // <Fragment>

    //     <Parent></Parent>
    // </Fragment>,

    // <storeContext.Provider value={store}> 
    //     <Counter></Counter>
    //     <Counter1></Counter1>
    // </storeContext.Provider>,

    // <Counter2></Counter2>,

    <Router>
        <Index></Index>
    </Router>,


    document.getElementById('root')
)