import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Page1Item from './page1Item'


class page1 extends Component {
    render() {
        return (
            <div>
                page1
                <Route
                    path="/page1/item"
                    component={Page1Item}
                />
            </div>
        );
    }
}

export default page1;