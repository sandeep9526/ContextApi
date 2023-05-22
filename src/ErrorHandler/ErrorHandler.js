
export const errorhandler =(error)=>{
    // if (error.status === 500) {
    //     return 'Internal server error';
    // }else if (error.status === 502) {
    //     return 'Bad gateway';
    // }else if (error.status === 503) {
    //     return 'Service unavailable';
    // }else if (error.status === 504) {
    //     return 'Gateway timeout';
    // }else if (error.status === 507) {
    //     return 'Insufficient storage';
    // }else if (error.status === 400) {
    //     return error.data.message || 'Bad Request';
    // }else if (error.status === 401) {
    //     return error.data.message || 'Unauthorized user';
    // }else if (error.status === 403) {
    //     return error.data.message || 'Already exists';
    // }else if (error.status === 404) {
    //     return 'Your request is invalid';
    // }
    
    switch (error.status) {
        case (error.status === 500):
            return 'Internal server error';
        case (error.status === 502):
            return 'Bad gateway';
        case (error.status === 503):
            return 'Service unavailable';
        case (error.status === 504):
            return 'Gateway timeout';
        case (error.status === 400):
            return error.data.message || 'Bad Request';
        case (error.status === 401):
            return error.data.message || 'Unauthorized user';
        case (error.status === 403):
            return error.data.message || 'Already exists';
        case (error.status === 404):
            return 'Your request is invalid';
    }
}

