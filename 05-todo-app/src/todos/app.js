import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from './use-cases';
const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: "#new-todo-input",
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PedingCountLabel: '#pending-count'
}
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
        updatePendingCount();
    }
    const updatePendingCount = () => {
        renderPending(ElementIds.PedingCountLabel);

    }


    // Cuando la función App() se llama
    (() => {


        const app = document.createElement('div');
        app.innerHTML = html;

        document.querySelector(elementId).append(app);
        displayTodos();

    })();


    // Referencias HTML

    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUl = document.querySelector(ElementIds.TodoList);
    const clearCompletedButton = document.querySelector(ElementIds.ClearCompleted)
    const filtersLis = document.querySelectorAll(ElementIds.TodoFilters);

    // Listeners

    newDescriptionInput.addEventListener('keyup', (event) => {
        console.log(event);
        console.log(event.target.value);

        if (event.keyCode != 13) return;
        if (event.target.value.trim().length === 0) return;


        todoStore.addTodo(event.target.value)
        displayTodos();
        event.target.value = '';

    })

    todoListUl.addEventListener('click', (event) => {

        const element = event.target.closest('[data-id]')
        todoStore.toggleTodo(element.getAttribute('data-id'))
        displayTodos();
    })

    todoListUl.addEventListener('click', (event) => {

        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]')
        if (!element || !isDestroyElement) return;

        // console.log(element.getAttribute('data-id'));
        todoStore.deleteTodo(element.getAttribute('data-id'))
        displayTodos();

    })


    clearCompletedButton.addEventListener('click', (event) => {
        todoStore.deleteCompleted();
        renderTodos();
        displayTodos();
    });

    filtersLis.forEach(element => {


        element.addEventListener('click', (element) => {
            filtersLis.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected')

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Peding)
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                    break;
            }

            displayTodos();

        })
    })


}