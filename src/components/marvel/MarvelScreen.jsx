import React from 'react'
import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics';
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <h3>Hero list</h3>
            <HeroesList publisher={publisher}/>
        </div>
    )
}
