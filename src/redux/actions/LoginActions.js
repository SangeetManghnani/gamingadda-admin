import firebase from 'utils/firebase/setup.js';


export function setAdminLoginStatus(loginStatus) {
    return {
        type: 'ADMIN_LOGIN_STATUS_CHANGE',
        loginStatus
    }
}
export function isAdminLogingIn(status) {
    return {
        type: 'ADMIN_LOGGING_IN',
        status
    }
}
export function loginAdmin(credentials) {
    return (dispatch) => {
        dispatch(isAdminLogingIn(true));
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(user => {
                dispatch(setAdminLoginStatus(true));
                dispatch(isAdminLogingIn(false));
            })
            .catch(error => {
                dispatch(isAdminLogingIn(false));
                dispatch(setAdminLoginStatus(false));
            });
    }
}

export function logoutAdmin(credentials) {
    // return (dispatch) => {
    //     firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then(user => {
    //             dispatch(setAdminLogin(true));
    //         })
    //         .catch(error => {
    //            dispatch(setAdminLogin(false));
    //         });
    // }
}