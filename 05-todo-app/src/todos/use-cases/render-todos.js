import { createTodoHTML } from "./";

let element;
/**
 * 
 * @param {String} elemtId 
 * @param {Todo} todos 
 */
export const renderTodos = (elemtId, todos = []) => {

    if (!element) element = document.querySelector(elemtId);


    if(!element) throw new Error(`Element ${elemtId} not found`);
    
    element.innerHTML='';

    todos.forEach(todo => {
        element.append(createTodoHTML(todo))


    });


}