import axios from 'axios';
const baseURL ='https://lk-stud.api.kreosoft.space/api/';
const instance = axios.create({
    baseURL : baseURL
});


function login(email, password, rememberMe){
    return instance.post('Auth/login',{
        email: email,
        password: password,
        rememberMe: rememberMe
    })
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error => {
        console.log(error.response.data.error)
    });
}


export const lkApi = {
    login : login
}