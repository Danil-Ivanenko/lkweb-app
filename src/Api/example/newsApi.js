//import * as axios from 'Axios';
import axios from 'axios';
const baseURL ='https://blog.kreosoft.space/api/';
//https://camp-courses.api.kreosoft.space/swagger/index.html
const instance = axios.create({
    baseURL : baseURL
});

function getNews(){
    return instance.get('post')
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error => {
        console.log(error.response.data.error)
    });
}

export const newsApi = {
    getNews : getNews
}