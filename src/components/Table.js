import React from 'react';
import { connect } from 'react-redux';
import { changeCell } from '../actions/index'
import './Table.css';

// import TableList from '../containers/tableList';

const Table = function (state, {changeCl}) {
    console.log(state);
    function generateTable(st) {
        return st.tables.map((item, indexRow) => {
            return (
                <tr key={indexRow}>{item.map((item, indexCol) => <td key={indexCol}> <input onChange={event => state.changeCl(indexCol, indexRow, event.target.value)} type="text" placeholder={item} /></td>)}</tr>
            );
        });
    }

    return (
        <table>
            <tbody>
                {generateTable(state)}
            </tbody>
        </table>
    )
};

const mapStateToProps = state => ({
    tables: state.tables
})

const mapDispatchToProps = dispatch => ({
    changeCl: (indeCol, indexRow, val) => dispatch(changeCell(indeCol, indexRow, val)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Table);