import _ from 'lodash';

export default function loginReducer(state = { loginStatus: false, isLogginIn: false }, action) {
    switch (action.type) {
        case 'ADMIN_LOGIN_STATUS_CHANGE':
            const loginStatusState = _.cloneDeep(state);
            loginStatusState.loginStatus = action.loginStatus;
            return loginStatusState;
        case 'ADMIN_LOGGING_IN':
            const logginInState = _.cloneDeep(state);
            logginInState.isLogginIn = action.status;
            return logginInState;
        default:
            return state;
    }
}