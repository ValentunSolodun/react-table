import React from 'react';
import styled from './registerPage.module.css'
import { connect } from 'react-redux';
import { registerAction, validationAction } from '../../actions/auth';
import { Link } from 'react-router-dom';


const Register = ({ registaration, validation, user }) => {
    console.log(user);
    return (
        <div className={styled.form_register_wrapper}>
            <form className={styled.form} onSubmit={registaration}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onInput={validation} type="text" className="form-control" id="name" placeholder="Enter name" />
                    <small className="form-text text-muted">More then 1 characters</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email_adress">Email address</label>
                    <input onInput={validation} type="email" className="form-control" id="email_adress" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onInput={validation} type="password" className="form-control" id="password" placeholder="Password" />
                    <small className="form-text text-muted">More then 5 characters</small>
                </div>
                <div className="button-wrapper">
                    <button disabled={!user.errors.nameValid || !user.errors.emailValid || !user.errors.passwordValid} type="submit" className="btn btn-primary">Register</button>
                    <Link className="btn btn-link" to="/login">Login</Link>
                </div>
            </form>
            {user.result ? (
                <div className={`${styled.alert} alert alert-danger`} role="alert">
                    {user.result}
                </div>
            ) : (null)}

        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    registaration: e => dispatch(registerAction(e)),
    validation: e => dispatch(validationAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);