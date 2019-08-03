import React, { Component } from 'react';
import {
    Route,
    Link,
  } from 'react-router-dom';

class HomeLayout extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/sub-page">
                    {/* component look before entering sub-page */}
                    <div>
                        <h1>whats going on here lol</h1>
                    </div>
                </Link>
            </div>
    )}
}

export default HomeLayout