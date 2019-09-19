const addColumn = () => ({
    type: 'ADD_COL',
    text: 'test'
});

const addRow = () => ({
    type: 'ADD_ROW',
    text: 'test 1'
});

const changeCell = (indexCol, indexRow, value) => ({
    type: 'CHANGE_CELL',
    idCol: indexCol,
    idRow: indexRow,
    val: value
});

export {addRow, addColumn, changeCell};