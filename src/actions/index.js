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

export {addRow, addColumn, removeRow, removeColumn, changeCell};