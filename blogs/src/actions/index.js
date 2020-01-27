import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fecthPosts = ()=>{
    return async (dispatch)=>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data});
    }
};

export const fecthUsers = () =>{
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get('/users');
        console.log(response);
        dispatch({type:'FETCH_USERS',payload:response.data});
    }
}