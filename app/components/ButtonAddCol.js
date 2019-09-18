import React from 'react';
import { addColumn } from '../actions/index';
import { connect } from 'react-redux';

const ButtonAddCol = function ({addC}) {
    console.log(arguments);
    return (
        <button onClick={addC} type="button" className="btn btn-primary btn-add-column">Add Column</button>
    )
};

const mapStateToProps = state => ({
    state: state.tables
})

const mapDispatchToProps = dispatch => ({
    addC: () => dispatch(addColumn())
})

export default connect(
        mapStateToProps,
        mapDispatchToProps)
(ButtonAddCol);