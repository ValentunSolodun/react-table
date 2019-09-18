import React from 'react';
import { addRow } from '../actions/index';
import { connect } from 'react-redux';

const ButtonAddRow = function ({addR}) {
    console.log(arguments);
    return (
        <button onClick={addR} type="button" className="btn btn-primary btn-add-row">Add Row</button>
    )
};

const mapStateToProps = state => ({
    state: state.tables
})


const mapDispatchToProps = dispatch => ({
    addR: () => dispatch(addRow())
})

export default connect(
        mapStateToProps,
        mapDispatchToProps)
(ButtonAddRow);