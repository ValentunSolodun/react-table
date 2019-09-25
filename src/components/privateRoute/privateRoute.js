import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tokenCheck } from '../../actions/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    // rest.loadUserFromToken();
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('token')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login' }} />
        )} />
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    loadUserFromToken: () => dispatch(tokenCheck())
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);