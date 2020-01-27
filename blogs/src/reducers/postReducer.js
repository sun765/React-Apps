const postReducer = (state = [], action)=>{
    switch (action.type){
        case 'FETCH_POSTS':
            //console.log(action);
            return action.payload;
        default:
            return state;
    }
}

export default postReducer;