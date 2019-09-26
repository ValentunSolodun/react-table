import React from 'react';
import { connect } from 'react-redux';
import {getTable, changeCell} from '../actions/index'
import styled from './Table.css';

const Table = function (state) {

    // console.log(state);

    function generateTable(st) {
        if(st.tables.loading === true) return <tr><td>Loading...</td></tr>
        else if (!st.tables.length) return <tr><td>Table is empty.</td></tr>;
        else {
            return st.tables.map((item, indexRow) => {
                return (
                    <tr key={indexRow}>{item.map((item, indexCol) => <td key={indexCol}> <input onChange={event => state.changeCl(indexCol, indexRow, event.target.value)} type="text" defaultValue={item} /></td>)}</tr>
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
    user: state.user
})

const mapDispatchToProps = dispatch => {
    dispatch(getTable());
    return {
        changeCl: (indeCol, indexRow, val) => dispatch(changeCell(indeCol, indexRow, val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Table);