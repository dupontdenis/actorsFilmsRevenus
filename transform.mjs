// FILE: transform.mjs
import { films, actorSalaries } from './dataFilms.mjs';

const transformation = films.reduce((acc, film) => {
    film.actors.forEach(actor => {
        let actorEntry = acc.find(entry => entry.actor === actor);
        if (!actorEntry) {
            actorEntry = { actor, films: [], revenue: 0 };
            acc.push(actorEntry);
        }
        actorEntry.films.push(film.title);
        actorEntry.revenue += actorSalaries.get(actor) || 0;
        console.log(actorEntry.revenue);
    });
    return acc;
}, []);

console.log(transformation);

export { transformation };
