import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav.js'
import Users from './Users.js'
import Things from './Things.js'
import axios from 'axios'

export default class App extends Component{

    constructor(){
        super()
        console.log('I am in app')
        this.state = {
            users: [],
            things: []
        }
    }

    componentDidMount(){
        Promise.all([axios.get('/api/users'), 
        axios.get('/api/things')])
        .then(([res1, res2])=>{
            this.setState({users: res1.data, things: res2.data})
        })
        .catch((err)=>console.log(err))
    }

    render(){
        return (
            <HashRouter>
            <div id="main">
                <h1>ACME Favorites</h1>
                <div className='column container'>
                    
                    
                </div>
            <div id="router">
                <Route render={(({location, usercount, thingcount})=>
                                Nav({location, usercount: this.state.users.length, thingcount: this.state.things.length}))}/>
                <Route path='/users' render={(()=>Users(this.state.users))} />
                <Route path='/things' render={(()=>Things(this.state.things))} />
                <Route exact path='/' render={(()=>Users(this.state.users))} />
            </div>
            </div>
            </HashRouter>
        )
    }
}

