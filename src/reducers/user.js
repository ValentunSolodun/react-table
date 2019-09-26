let initialState = { name: '', email: '', errors: { nameValid: false, emailValid: false, passwordValid: false }, result: '' };

const user = (state = initialState, action) => {

    function validFields(field, value) {
        let regEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (field === 'email_adress') {
            console.log('email');
            return value.match(regEmail) ?
                { ...state, errors: { ...state.errors, emailValid: true } }
                : { ...state, errors: { ...state.errors, emailValid: false } }
        } else if (field === 'password') {
            return value.length > 5 ?
                { ...state, errors: { ...state.errors, passwordValid: true } }
                : { ...state, errors: { ...state.errors, passwordValid: false } }
        } else if (field === 'name') {
            return value.length >= 1 ?
                { ...state, errors: { ...state.errors, nameValid: true } }
                : { ...state, errors: { ...state.errors, nameValid: false } }
        }
    }

    switch (action.type) {
        case 'VALIDATION':
            return { ...validFields(action.payload.id, action.payload.value) }
        case 'REGISTERSEND':
            return { ...state }
        case 'REGISTERRESULT':
            return { ...state, result: action.payload }
        case 'LOGINSEND':
            return { ...state }
        case 'LOGINRESULT':
            return { ...state }
        case 'SUCCESSFUL_USER':
            let stateUser = { ...state };
            stateUser.id = action.payload.id;
            stateUser.name = action.payload.name;
            stateUser.email = action.payload.email;
            stateUser.result = 'Signed in';
            return { ...stateUser }
        case 'LOGOUT':
            return initialState
        default:
            return state;
    }

}

export default user;