import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    const publisher = 'DC Comics';
    return (
        <div>
            <h1>Dc Screen</h1>
            <hr />
            <h3>Hero list</h3>
            <HeroesList publisher={publisher}/>
        </div>
    )
}
