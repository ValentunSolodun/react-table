import React from 'react';
import { connect } from 'react-redux';
import {getTable, changeCell} from '../actions/index'
import styled from './Table.css';

// import TableList from '../containers/tableList';

const Table = function (state) {
    // setTimeout(() => {console.log(state)}, 2000);
    console.log(state)
    function generateTable(st) {
        if(st.tables.loading == true) return <h1>Loading...</h1>
        else if (!st.tables.length) return <h5>Teble is empty. Add a row</h5>;
        else {
            return st.tables.map((item, indexRow) => {
                return (
                    <tr key={indexRow}>{item.map((item, indexCol) => <td key={indexCol}> <input onChange={event => state.changeCl(indexCol, indexRow, event.target.value)} type="text" placeholder={item} /></td>)}</tr>
                );
            });
        }
    }

    return (
        <table className={styled.table}>
            <tbody>
                {generateTable(state)}
            </tbody>
        </table>
    )
};

const mapStateToProps = state => ({
    tables: state.tables,
    loadIndication: state.loading
})

const mapDispatchToProps = dispatch => {
    dispatch(getTable());
    return {
        changeCl: (indeCol, indexRow, val) => dispatch(changeCell(indeCol, indexRow, val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Table);