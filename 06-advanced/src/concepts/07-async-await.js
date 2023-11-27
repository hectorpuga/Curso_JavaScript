

/**
 * 
 * @param {HTMLDataElement} element 
 */
export const asyncAwait2Component = async (element) => {
console.time('Inicio');
  
const [value1,value2,value3]=await Promise.all([slowPromise(),mediumPromise(),fastPromise()])

    element.innerHTML=`
    value1: ${value1},
    value2: ${value2},
    value3: ${value3},
    `

    console.timeEnd('Inicio');



}




const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 3000);
})