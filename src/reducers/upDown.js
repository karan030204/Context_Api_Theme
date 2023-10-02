const initialstate = 0;

//This is pure Reducer Function 
const changeTheNumber = (state = initialstate,action) => {

    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - action.payload;
        default : return state;
    }

}

export default changeTheNumber