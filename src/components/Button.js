import React from 'react';
// import { addColumn, addRow } from '../actions/index';
import { connect } from 'react-redux';

const Button = function ({action, text, style, state, actionToAdd}) {
    // console.log(arguments);
    return (
        <button onClick={() => actionToAdd()} className={"btn btn-primary " + style}>{text}</button>
    )
};

const mapStateToProps = state => ({
    state: state.tables
});

const mapDispatchToProps = (dispatch, {onClick}) => ({
    actionToAdd: () => dispatch(onClick()),
});

export default connect(
    mapStateToProps, mapDispatchToProps)(Button);