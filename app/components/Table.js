import React from 'react';
// import tables from '../reducers/tables';
import { connect } from 'react-redux';
// import TableList from '../containers/tableList';

const Table = function (state) {
    // console.log(state.tables.tables['rows']);
    function generateTable(state) {
        let key = 0;
        let rows = new Array(state.tables[0]).join('text ').split(' ');
        let col = new Array(state.tables[1]).join('text ').split(' ');
        console.log(state);
        return rows.map((item) => {
            return (
                <tr key={key++}>{col.map((item) => <td key={key++}> <input type="text" placeholder='Example' /></td>)}</tr>
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

export default connect(mapStateToProps)(Table);