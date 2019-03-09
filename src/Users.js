import React, {Component} from 'react'
import axios from 'axios'

export default class Users extends Component{
    constructor(){
        super()
        console.log('i am in the users constructor')
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('/api/users')
        .then(response=>response.data)
        .then(users=>this.setState({users}))
        .catch((err)=>console.log(err))
    }

    render() {
        const users = this.state.users
        console.log(users)
        return (
            
                <ul>
                {users.map(user=>{
                    return (
                        <li key={user.id}>
                            {user.name}
                            <ul>
                                {user.favorites.map(favorite=>{
                                    return (
                                        <li key={favorite.id}>{favorite.thing.name} (Ranked: {favorite.rank})</li>
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