import { authFetch } from './intance';
import { errorhandler } from '../../ErrorHandler/ErrorHandler';


authFetch.interceptors.request.use((request) => {
  return request;
},
  (error) => {
    let message = errorhandler(error.response)
    return Promise.reject(message);
  }
);

authFetch.interceptors.response.use((response) => {
  return response;
},
  (error) => {
    let message = errorhandler(error.response)
    return Promise.reject(message);
  }
);


export { authFetch }

