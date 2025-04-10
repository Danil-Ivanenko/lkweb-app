import { lkApi } from '../Api/lkApi';


const LOAD_PROFILE = "LOAD_PROFILE";
const LOAD_STUDENT = "LOAD_STUDENT";
const LOAD_EMPLOYEE = "LOAD_EMPLOYEE";
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
    },
    student :{
        id: null,
        educationEntries : []
    },
    employee :{
        id: null,
        experience :[],
        posts : []
    }


  };


const profileReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_PROFILE:
            newState.profile  = action.profile ;
            return newState
        case LOAD_STUDENT:
            newState.student = action.student;
            return newState
        case LOAD_EMPLOYEE:
            newState.employee = action.employee;
            return newState
        default:
            return newState;
    }
}

export function loadProfileActionCreator(profile ){

    return {type: LOAD_PROFILE, profile : profile } 

}

export function loadStudentActionCreator(student ){

    return {type: LOAD_STUDENT, student : student } 

}

export function loadEmployeeActionCreator(employee ){

    return {type: LOAD_EMPLOYEE, employee : employee } 

}


export function loadProfileThunkCreator(){

    return (dispatch) => {
        lkApi.getProfile().then(data =>{
            dispatch(loadProfileActionCreator(data));
        })
    }
}
export function loadStudentThunkCreator(){

    return (dispatch) => {
        lkApi.getProfileStudent().then(data =>{
            dispatch(loadStudentActionCreator(data));
        })
    }
}
export function loadEmployeeThunkCreator(){

    return (dispatch) => {
        lkApi.getProfileEmployee().then(data =>{
            dispatch(loadEmployeeActionCreator(data));
        })
    }
}


export default profileReducer;