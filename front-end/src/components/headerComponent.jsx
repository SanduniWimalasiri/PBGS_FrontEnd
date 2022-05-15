import React, { Component } from 'react';

class headerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            admins: []
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Power Bill Generating System</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default headerComponent;