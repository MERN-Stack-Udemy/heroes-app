import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [{search}, handleChange, reset] = useForm({search:''});
    const heroesFiltered = heroes;
    const handleSearch = (e) => {
        e.preventDefault();

        console.log(search);
        reset();
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4 > Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input
                            name="search"
                            type="text" 
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleChange}
                            value={search}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Resulsts</h4>
                    <hr />
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
