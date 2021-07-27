import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();
    const hero = getHeroById(heroId);
    if ( hero.length === 0 ) {
        return <Redirect to="/"/>
    }
    const handleReturn = () =>{
        history.length <= 2 ? history.push('/') : history.goBack();
    }
    
    const { superhero, alter_ego, first_appearance, characters, publisher } = hero[0];
    return (
        <div>
            <h1>Hero Screen</h1>
            <hr />
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`../assets/heroes/${ heroId }.jpg`} 
                        alt={superhero}
                        className="img-thumbnail animate__animated animate__bounceInLeft"
                    />
                </div>

                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush animate__animated animate__bounceInUp">
                        <li className="list-group-item"> <strong>Alter ego:</strong> {alter_ego}</li>
                        <li className="list-group-item"> <strong>Publisher:</strong> {publisher}</li>
                        <li className="list-group-item"> <strong>Fist appearance:</strong> {first_appearance}</li>
                        {
                            (alter_ego !== characters) &&
                            <li className="list-group-item"> <strong>Characters:</strong> {characters}</li>
                        }
                    </ul>

                    <button
                        className="btn btn-outline-info animate__animated animate__fadeInUpBig"
                        onClick={ handleReturn }
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
