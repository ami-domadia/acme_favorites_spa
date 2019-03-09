import React, {Component} from 'react'
import axios from 'axios'

export default class Things extends Component{
    constructor(){
        super()
        console.log('i am in the users constructor')
        this.state = {
            things: []
        }
    }

    componentDidMount(){
        axios.get('/api/things')
        .then(response=>response.data)
        .then(things=>this.setState({things}))
        .catch((err)=>console.log(err))
    }

    render() {
        const things = this.state.things
        console.log(things)
        return (
            
                <ul>
                {things.map(thing=>{
                    return (
                        <li key={thing.id}>
                            {thing.name}
                            <ul>
                                {thing.favorites.map(favorite=>{
                                    return (
                                        <li key={favorite.id}>favorited by: {favorite.user.name}</li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
                </ul>
            
        )
    }
}