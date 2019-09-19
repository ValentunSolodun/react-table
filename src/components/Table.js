import React from 'react';
import { connect } from 'react-redux';
import './Table.css';

// import TableList from '../containers/tableList';

const Table = function (state) {
    function generateTable(state) {
        console.log(state);
        return state.tables.map((item, index) => {
            return (
                <tr key={index}>{item.map((item, index) => <td key={index}> <input type="text" placeholder={item} /></td>)}</tr>
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