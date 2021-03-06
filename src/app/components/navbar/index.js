import React, {Component} from 'react';
import './navbar.css';
import { getUserIsSignInState, getCurrentUserNameState, getUserIsAdmin } from '../../userSelector'
import {connect} from "react-redux";
import {logOutSuccess} from "../../actions/authenticate";
import PropTypes from 'prop-types';
import BasketCart from "../basketCart/basket";

const propTypes = {
    show: PropTypes.bool.isRequired,
    showAddBook: PropTypes.bool.isRequired,
    showName:PropTypes.string,
    logOut: PropTypes.func.isRequired
};

class NavbarMenu extends Component {

    render() {
        return (
            <div className="container">
                <div className="header-nav">
                    <ul className="nav nav-pills">
                        <span className="logo"/>
                        <li>
                            <a href="/">Main</a>
                        </li>
                        <li>
                            <a href="/">Category</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contacts</a>
                        </li>
                        <li style={{display: this.props.showAddBook ? 'block': 'none'}}>
                            <a href="/admin">Add book</a>
                        </li>
                        <div className="name" style={{display: this.props.showName ? 'block': 'none'}}>
                            <p>Hello, {this.props.showName}</p>
                        </div>
                        <li className="log-out-btn" style={{display: this.props.show ? 'block': 'none'}}>
                            <a href="/" onClick = {this.props.logOut}>Log out</a>
                        </li>
                        <li className="dropdown"  style={{display: !this.props.show ? 'block': 'none'}}>
                            <a className="dropdown-toggle" data-toggle="dropdown" href="">
                                Private office <span className="caret"/>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a data-toggle="modal" data-target="#auth-popup">Log in</a>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#registr-popup">Sign up</a>
                                </li>
                            </ul>
                        </li>
                        <BasketCart/>
                    </ul>
                </div>
            </div>
        );
    }
}
NavbarMenu.propTypes = propTypes;
export  default connect(
    state => ({
        show: getUserIsSignInState(state),
        showAddBook: getUserIsAdmin(state),
        showName: getCurrentUserNameState(state),
    }),
    dispatch => ({
        logOut: () => dispatch(logOutSuccess())
    })
)(NavbarMenu);
