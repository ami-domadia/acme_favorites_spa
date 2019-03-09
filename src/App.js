import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav.js'
import Users from './Users.js'
import Things from './Things.js'

export default class App extends Component{

    render(){
        return (
            <HashRouter>
            <div id="main">
                <h1>ACME Favorites</h1>
                <div className='column container'>

                    <Nav />
                </div>
            <div id="router">
                <Route path='/users' component={Users} />
                <Route path='/things' component={Things} />
                <Route exact path='/' component={Users} />
            </div>
            </div>
            </HashRouter>
        )
    }
}

