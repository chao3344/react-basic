import React, { Component } from 'react';
import {
    
    Switch,
    Route,
    NavLink,
    Redirect

} from 'react-router-dom'

import Page1 from './page1'
import Page2 from './page2'
import './router.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/* 高亮设置，可以自己添加类名设置样式 */}
                    <li> <NavLink activeClassName="active" to="/page1">page1</NavLink> </li>
                    <li> <NavLink activeClassName="active" to="/page2">page2</NavLink> </li>
                </ul>

                {/* switch可以用来排他路由，实现路由的匹配，匹配到了就会跳转 */}
                {/* 最普通的路由应该放到最下面，应为路由匹配时是从上到下的 */}
                <Switch>
                    <Route
                        path = "/page1"
                        component={Page1}
                    />
                    <Route
                        path = "/page2"
                        component={Page2}
                    />

                    {/* 默认路由当没有匹配时就会走默认的，但必须放在最下面 */}
                    <Redirect
                        from="/"
                        to="/page1"
                    ></Redirect>
                    

                    
                </Switch>


            </div>
        );
    }
}

