const initialState = [['', '', ''], ['', '', '']];

// [[1,1,1]]

const tables = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROW':
        function row(){
          let newState = [];
          for(let i = 0; i < state[0].length; i++) {
            newState.push('');
          }
          return newState;
        }
      return [
        ...state,
        row()
      ];
    case 'ADD_COL':
      function col() {
        let newState = [...state];
        for (let i = 0; i < state.length; i++) {
          let newStateItem = [...state[i]];
          newStateItem.push('');
          newState[i] = newStateItem;
        }
        return newState;
      }
      return [...col()];
    case 'CHANGE_CELL':
      function cell() {
        let newCell = [...state[action.idRow]];
        newCell.splice(action.idCol,1, action.val);
        let newState = [...state];
        newState.splice(action.idRow, 1, newCell);
        return newState;
      }
      return [...cell()];
    default:
      return state
  }
}

export default tables

