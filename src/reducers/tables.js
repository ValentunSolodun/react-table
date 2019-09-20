let initialState = [];

const tables = (state = initialState, action, loadIndication) => {

  //add a row
  function addRow() {
    let newState = [];
    for (let i = 0; i < state[0].length; i++) {
      newState.push('');
    }
    return newState;
  }
  //

  //remove a row
  function removeRow() {
    let newState = [...state];
    newState.pop();
    return newState;
  }
  //

  //add a column
  function addCol() {
    let newState = [...state];
    for (let i = 0; i < state.length; i++) {
      let newStateItem = [...state[i]];
      newStateItem.push('');
      newState[i] = newStateItem;
    }
    return newState;
  }
  //

  //remove a column
  function removeCol() {
    let newState = [...state];
    for (let i = 0; i < state.length; i++) {
      let newStateItem = [...state[i]];
      newStateItem.pop();
      newState[i] = newStateItem;
    }
    return newState;
  }
  //

  //change single cell
  function uptateCell() {
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        user: {
          name: "John",
          email: "john@example.com"
        }
      }),
      mode: 'no-cors'
    })
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
        addRow()
      ];
    case 'REMOVE_ROW':
      return [...removeRow()]
    case 'ADD_COL':
      return [...addCol()];
    case 'REMOVE_COL':
      return [...removeCol()];
    case 'CHANGE_CELL':
      return [...uptateCell()];
    default:
      return state
  }
}

export default tables

