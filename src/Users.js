import React from 'react'

export default function Users(users){
    console.log('I am in the new users')
    console.log(users)
    return (
        
            <ul>
            {users.map(user=>{
                return (
                    <li key={user.id}>
                        {user.name}
                        {user.favorites.map((favorite)=>{
                            return (<ul id="user_favorites">
                            
                                <li key={favorite.id}>
                                    {favorite.thing.name} (Ranked: {favorite.rank})
                                </li>
                            
                            </ul>)
                        })}
                    </li>
                )
            })}
            </ul>
        
    )
}
