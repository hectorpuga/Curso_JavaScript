import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDataElement} element 
 */
export const callbacksComponent = (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    findHeroes(id1, (error,hero1) => {
        if(error){
            element.innerHTML=error;
            return;
        }
        // element.innerHTML = hero?.name||"No hay heroes";
        findHeroes(id2,(error,hero2)=>{
            if(error){
                element.innerHTML=error;
                return;
            }
            element.innerHTML = `${hero1.name}/${hero2.name}`

        })

    });



}

/**
 * 
 * @param {String} id 
 * @param {(error:String|null,hero: Object)=>void} callback 
 */
const findHeroes = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id)

    if (!hero) {
        callback(`Hero With id ${id} not found.`)
        return;
    }

    callback(null, hero);
}