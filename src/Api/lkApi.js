import axios from 'axios';
const baseURL ='https://lk-stud.api.kreosoft.space/api/';
const instance = axios.create({
    baseURL : baseURL
});


async function login(email, password, rememberMe){
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

async function getProfile(){
    return instance.get('Profile', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then(response => {
        if (response.status === 200) {
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
    if (localStorage.getItem('token') == null)
    {
        return null
    }
    try {
        const response = await instance.post('Auth/refresh', {
            refreshToken: localStorage.getItem('refreshToken'),
        });


        if (response.status === 200) {
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return null
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
        if (error.response.status === 401) {
            
            if (!originalRequest._retry && originalRequest.url != "Auth/refresh") {
                originalRequest._retry = true;
    
                const newAccessToken = await refreshToken();

                if (!newAccessToken) {
                    console.log("Ошибка: Не удалось обновить токен!");
                    return Promise.reject(error);
                }
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);








export const lkApi = {
    login : login,
    getProfile : getProfile
}