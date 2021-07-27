import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    const query = q;
    const [ {searchText}, handleChange ] = useForm({searchText: query});
    
    const heroesFiltered = useMemo(() => getHeroesByName( query ), [query]);

    const handleSearch = (e) => {
        e.preventDefault(); 
        history.push(`?q=${ searchText }`)
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
                            name="searchText"
                            type="text" 
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleChange}
                            value={searchText}
                            autoComplete="false"
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
                    <h4> Results</h4>
                    <hr />
                    {
                        (q === '' &&
                        <div className="alert alert-info">
                            Search some Hero
                        </div>)
                    }
                    {
                        ((q !=='' && heroesFiltered.length === 0 ) &&
                        <div className="alert alert-danger">
                            There is no a hero with: '{ q }'.
                        </div>)
                    }
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
