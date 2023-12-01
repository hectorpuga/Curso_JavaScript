

const state = [
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


const index = 1;
const newName = 'Green Lantern';

// const statecopy = state.map((hero, i) => {
//     if (i === i) {
//         hero.name = newName
//     }

//     return {...hero};
// })

const newState = state.copyWithin(index, {

    ...state.at(index),
    name: newName
});

// console.table(statecopy);

console.log('El ultimo:',state.at(-1));