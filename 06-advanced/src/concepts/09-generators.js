

/**
 * 
 * @param {HTMLDataElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button)

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click',renderButton);




}


function* idGenerator() {
    let currentId = 0;

    while (true) {
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction() {

    yield 'Primer Valor';
    yield 'Segundo Valor';
    yield 'Tercer Valor';
    yield 'Cuarto Valor';


    return 'Ya no pueden hacer nada';
    yield 'Ya no pueden hacer nada';

}

