const initialState = [1,1];

// [[1,1,1]]

const tables = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ROW':
        console.log(...state);
        return [
          ++state[0],
          state[1]
        ]
      case 'ADD_COL':
          console.log(state);
        return [
          state[0],
          ++state[1]
        ]
      default:
        return state
    }
  }
  
  export default tables