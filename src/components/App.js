import React from 'react'
import Table from '../components/Table'
import Button from './Button';
import { addRow, addColumn, removeRow, removeColumn } from '../actions/index';
import styles  from './Button.module.css'
// import ButtonAddRow from '../components/ButtonAddRow'
// import ButtonAddCol from '../components/ButtonAddCol'

// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'


const App = () => (
  <div>
    <div>
      <Table />
        <Button onClick={addColumn} text="Add Column" style={styles.btn_add_column}/>
        <Button onClick={removeColumn} text="Remove Column" style={styles.btn_remove_column}/>
    </div>
    <div>
    <Button onClick={addRow} text="Add Row" style={styles.btn_add_row}/>
    <Button onClick={removeRow} text="Remove Row" style={styles.btn_remove_row}/>
    </div>
  </div>
)

export default App