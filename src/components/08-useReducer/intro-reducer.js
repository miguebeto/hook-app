//Agregamos el estado inicial que va a tener nuestro reducer
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];


//creamos nuestro reducer que recibe como parámetro el state = defaultState y el action otro estado sin modificar el anterior
const todoReducer = ( state = initialState, action ) => {

    if(action?.type === 'agregar') {
        return [ ...state, action.payload ]
    }
    return state;
}


//inicializamos el reducer sin pasarle los parametros para ver el estado inicial
let todos = todoReducer();
// console.log(todos);

//Creamos el nuevo estado que será agregado al que ya se encuentra en el reducer
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//se agrega mediante el parametro action del reducer que contiene un objeto con el tipo de accion y el nuevo estado por agregar (payload)
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

//Agregamos el estado anterio o inicial por parámetro y la action con estado por agregar
todos = todoReducer( todos, agregarTodoAction )

//Miramos el resultado del objeto con los estados agregados en el reducer
console.log(todos)