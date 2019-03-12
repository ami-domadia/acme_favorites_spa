import React from 'react'


export default function Things(things){

           
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