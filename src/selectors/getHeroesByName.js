import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {
    
    if(name === '') return [];
    name = name.toLowerCase();

    return heroes.filter( hero => 
        // filter by superhero name
        hero.superhero.toLowerCase()
        .includes(name) || 
        // filter by publisher
        hero.publisher.toLowerCase()
        .includes(name) || 
        // filter by alter_ego
        hero.alter_ego.toLowerCase()
        .includes(name)
    );
}