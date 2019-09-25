import { history } from '../helpers/history'
import cookie from 'react-cookies';
const addColumn = () => ({
    type: 'ADD_COL'
});

const addRow = () => ({
    type: 'ADD_ROW'
});

const removeRow = () => ({
    type: 'REMOVE_ROW'
});

const removeColumn = () => ({
    type: 'REMOVE_COL'
});

const changeCell = (indexCol, indexRow, value) => ({
    type: 'CHANGE_CELL',
    idCol: indexCol,
    idRow: indexRow,
    val: value
});

const getTable = () => dispatch => {
    dispatch({ type: 'FETCHING_DATA', payload: { loading: true } })
    fetch('http://localhost:3001/', {
        method: 'GET',
        headers: { 
            'token' : cookie.load('token')
        }
    })
        .then(response => {
            if (response.status === 403) {
                history.push('/login');
            } else {
                return response.json();
            }
        })
        .then(json => json ? dispatch({ type: 'SUCCESSFUL_DATA', payload: formatingResponse(json) }) : false);

    function formatingResponse(data) {
        let array = [];
        for (let i = 0; i < data.length; i++) {
            let arr = [];
            data.filter((item, index) => {
                if (item.id_row === i) return arr.push(item.text);
                return null;
            });
            if (arr.length) array.push(arr);
        }
        return array;
    }
}

export { getTable, addRow, addColumn, removeRow, removeColumn, changeCell };