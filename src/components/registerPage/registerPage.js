import React from 'react';
import styled from './registerPage.module.css'
import { connect } from 'react-redux';
import { registerAction } from '../../actions/auth';

const Register = (...rest) => {
    console.log(rest);
    return (
        <div className={styled.form_register_wrapper}>
            <form className={styled.form}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="email_adress">Email address</label>
                    <input type="email" className="form-control" id="email_adress" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    tables: state.tables,
});

const mapDispatchToProps = dispatch => ({
    registaration: () => dispatch(registerAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);