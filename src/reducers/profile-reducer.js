import { lkApi } from '../Api/lkApi';


const LOAD_PROFILE = "LOAD_PROFILE";


let initialState = {
    profile :{
        id: null,
        email: null,
        lastName: null,
        firstName: null,
        patronymic: null,
        birthDate: null,
        gender: null,
        avatar: {
            id: null,
            name: null,
            extension: null,
            size: null
        },
        citizenship: {
            id: null,
            name: null,
            code: null
        },
        address: null,
        contacts: [],
        userTypes: []
    }
  };


const profileReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_PROFILE:
            newState.profile  = action.profile ;
            return newState
        default:
            return newState;
    }
}

export function loadProfileActionCreator(profile ){

    return {type: LOAD_PROFILE, profile : profile } 

}

export function loadProfileThunkCreator(){

    return (dispatch) => {
        lkApi.getProfile().then(data =>{
            dispatch(loadProfileActionCreator(data));
        })
    }
}

export default profileReducer;