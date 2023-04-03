import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducer/Reducer';

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//el compose puedeser el redux devtools(con el que estoy trabajando) o el rdux normal. para poder aplicar un Middleware

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunkMiddleware))); //esto nos permite hacer la req

export default store;

// react-redux: creamos el store  Sepuede reutilizar.
//obtenemos el reducer y podemos modificar el estado global
//se debe esportar a index.js para que este conectado ala aplicaion de react
