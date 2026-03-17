import axios from "axios";
import CheckToken from "./CheckToken";
import { LogoutwithoutNotification } from "./Logout";

let api = axios.create({
    baseURL:"https://backend-t1tu.onrender.com/api",
    
}); 

api.interceptors.request.use((config)=>{
    let token = CheckToken();
    config.headers.Authorization = `bearer ${token}`;
    return config;
});

    // api.interceptors.response.use(
    //     res => res,
    //     err => {
    //         if(err.response?.status === 401 || err.response?.status === 403){ 
    //             LogoutwithoutNotification();    
    //         }
    //         return Promise.reject(err);
    //     }
    // )

export default api;