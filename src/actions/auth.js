import { history } from '../helpers/history'
import cookie from 'react-cookies';

// export const tokenCheck = () => dispatch => {
//     let token = localStorage.getItem('token');

//     console.log('send')
//     fetch('http://localhost:3001/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ token })
//     })
//         .then(res => console.log(res));
// }

export const registerAction = e => dispatch => {
    e.preventDefault();
    let objDispatch = {
        name: e.target.name.value,
        email: e.target.email_adress.value,
        password: e.target.password.value
    }
    dispatch({ type: 'REGISTERSEND' });
    fetch('http://localhost:3001/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objDispatch)
    })
        .then(response => response.text())
        .then(
            text => {
                if (text === 'registered') history.push('/login')
                else dispatch({ type: 'REGISTERRESULT', payload: text })
            },
            err => console.log(err)
        );
}

export const loginAction = e => dispatch => {
    e.preventDefault();
    let objDispatch = {
        email: e.target.email_adress.value,
        password: e.target.password.value
    }
    dispatch({ type: 'LOGINSEND' });
    fetch('http://localhost:3001/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objDispatch)
    })
        .then(response => {
            if (response.status === 403) {
                return "";
            }
            return response.text();
        })
        .then(
            text => {
                if (text) {
                    cookie.save('token', text, { path: '/' });
                    history.push('/');
                    dispatch({ type: 'LOGINRESULT', payload: text })
                }
            }
        );
}


export const validationAction = e => {
    e.preventDefault();
    return {
        type: 'VALIDATION',
        payload: { id: e.target.id, value: e.target.value }
    }
}

export const logOutAction = () => {
    history.push('/login');
    cookie.remove('token');
    return {
        type: "LOGOUT"
    }

}