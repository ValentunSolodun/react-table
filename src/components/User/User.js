import React from 'react';
import { connect } from 'react-redux';
import styled from './User.module.css'
import {logOutAction} from '../../actions/auth'

const User = ({user, logOut}) => {
    
    return (
        <div className={styled.user_wrapper}>
            <img alt="logo" className={styled.user_wrapper_img} src={`https://ui-avatars.com/api/?name=${user.name}`} />
            <div className={styled.name_email_wrapper}>
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
            </div>
            <button onClick={logOut} type="button" className={`btn btn-dark ${styled.log_out_btn}` }>Log out</button>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);