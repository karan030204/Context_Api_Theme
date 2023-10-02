import { createStore } from "redux";
import rootReducer from "./reducers";


//Centralized Store, Every component can access this store throughout the application 
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store