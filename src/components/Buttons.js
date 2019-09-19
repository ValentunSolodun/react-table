import React from 'react';
import { addColumn, addRow } from '../actions/index';
import { connect } from 'react-redux';

const Buttons = function ({ addC, addR }) {
    console.log(arguments);
    return (
        <div className='container-buttons-add'>
            <button onClick={addC} type="button" className="btn btn-primary btn-add-column">Add Column</button>
            <button onClick={addR} type="button" className="btn btn-primary btn-add-row">Add Row</button>
        </div>
    )
};

const mapStateToProps = state => ({
    state: state.tables
})

const mapDispatchToProps = dispatch => ({
    addC: () => dispatch(addColumn()),
    addR: () => dispatch(addRow()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Buttons);