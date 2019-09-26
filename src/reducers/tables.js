import cookie from 'react-cookies';
let initialState = [];

const tables = (state = initialState, action) => {

  function apiFetch(url, body) {
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'token': cookie.load('token')
      },
      body: JSON.stringify(body)
    }).then(response => response.json()).then(json => console.log(json));
  }

  function addFields(param) {
    console.log('fetch addd');
    let updateParam = {
      columnLength: state[0] ? state[0].length : 1,
      rowLength: state.length,
      type: "ADD",
      whatType: param
    }

    if (param === 'ROW') {
      apiFetch('http://localhost:3001/', updateParam);
      let newState = [];
      for (let i = 0; i < updateParam.columnLength; i++) {
        newState.push('');
      }
      return newState;
    } else if (param === 'COLUMN') {
      apiFetch('http://localhost:3001/', updateParam);

      let newState = [...state];
      for (let i = 0; i < state.length; i++) {
        let newStateItem = [...state[i]];
        newStateItem.push('');
        newState[i] = newStateItem;
      }
      return newState;
    }
  }

  function removeFields(param) {
    console.log("remove Fields - ", state);
    let updateParam = {
      index: param === 'ROW' ? state.length : state[0].length,
      type: "REMOVE",
      whatType: param
    }

    if (param === 'ROW') {
      apiFetch('http://localhost:3001/', updateParam);

      let newState = [...state];
      newState.pop();
      return newState;
    } else if (param === 'COLUMN') {
      apiFetch('http://localhost:3001/', updateParam);

      let newState = [...state];
      for (let i = 0; i < state.length; i++) {
        let newStateItem = [...state[i]];
        newStateItem.pop();
        newState[i] = newStateItem;
      }
      return newState;
    }
  }

  //change single cell
  function uptateCell() {

    let updateParam = {
      idRow: action.idRow,
      idCol: action.idCol,
      value: action.val,
      type: "UPDATE"
    }

    apiFetch('http://localhost:3001/', updateParam);

    let newCell = [...state[action.idRow]];
    newCell.splice(action.idCol, 1, action.val);
    let newState = [...state];
    newState.splice(action.idRow, 1, newCell);
    return newState;
  }
  //

  switch (action.type) {
    case 'FETCHING_DATA':
      return action.payload;
    case 'SUCCESSFUL_DATA':
      return action.payload;
    case 'ADD_ROW':
      return [
        ...state,
        addFields('ROW')
      ];
    case 'REMOVE_ROW':
      return [...removeFields('ROW')]
    case 'ADD_COL':
      return [...addFields('COLUMN')];
    case 'REMOVE_COL':
      return [...removeFields('COLUMN')];
    case 'CHANGE_CELL':
      return [...uptateCell()];
    default:
      return state
  }
}

export default tables

