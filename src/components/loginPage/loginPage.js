import React from 'react';
import styled from './loginPage.module.css'
import { connect } from 'react-redux';
import { loginAction } from '../../actions/auth';

const Login = ({ login }) => {
    return (
        <div className={styled.form_login_wrapper}>
            <form className={styled.form} onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email_adress">Email address</label>
                    <input type="email" className="form-control" id="email_adress" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Enter</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    login: e => dispatch(loginAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);