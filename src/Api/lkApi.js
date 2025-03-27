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
        if (response.status === 200) {
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            return response.data; 
        }
    })
    .catch(error => {
        if (error.response) {
            return(error.response.data)
        }
        else
        {
            console.log("Ошибка")

        }
    });
}


async function refreshToken() {
    try {
        const response = await instance.post('Auth/refresh', {
            refreshToken: localStorage.getItem('refreshToken'),
        });


        if (response.status === 200) {
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
        }
    } catch (error) {
        console.error("Ошибка при обновлении токена:", error.response?.data || error.message);
        return null;
    }
}

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

           if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; 

            const newAccessToken = await refreshToken();

            if (newAccessToken) {
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            } else {
                console.error("Не удалось обновить токен, перенаправляем на страницу логина");
                //window.location.href = '/login'; // 
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);






export const lkApi = {
    login : login
}