

const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    }, {
        id: 2,
        name: 'Superman'
    }, {
        id: 3,
        name: 'Flash'
    }, {
        id: 4,
        name: 'Aquaman'
    }
]

// el structuredClone rompe la referencias y es mejor que el ...
const superrHeroesCopy=structuredClone(superHeroes)
console.table(superHeroes);
console.log(superrHeroesCopy);