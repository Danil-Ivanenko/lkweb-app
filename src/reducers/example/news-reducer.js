import { newsApi } from "../../Api/example/newsApi";


const LOAD_NEWS = "LOAD_NEWS";
const SET_EDIT_NEWS =  "SET_EDIT_NEWS";

let initialState = {
    info: { //news
        posts: [] 
      },
    EditNews : {
        title: ""
    }

}

const newsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_NEWS:
            newState.info = action.posts;
            return newState
        
        case SET_EDIT_NEWS:
            newState.info.posts = [...state.info.posts];
            newState.EditNews = {title: action.title};

            return newState;
        default:
            return newState;
    }
}

export function loadNewsActionCreator(posts){

    return {type: LOAD_NEWS, posts: posts} 

}

export function loadNewsThunkCreator(){

    return (dispatch) => {
        newsApi.getNews().then(data =>{
            dispatch(loadNewsActionCreator(data));
        })
    }
}


export function setEditNewsActionCreator(title){
    return {type: SET_EDIT_NEWS, title: title};
}
export default newsReducer;