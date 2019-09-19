const initialState = [['text', 'text', 'text'], ['text', 'text', 'text']];

// [[1,1,1]]

const tables = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROW':
        function row(){
          let newState = [];
          for(let i = 0; i < state[0].length; i++) {
            newState.push('text');
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
          newStateItem.push('text');
          newState[i] = newStateItem;
        }
        return newState;
      }
      return [...col()]
    default:
      return state
  }
}

export default tables

