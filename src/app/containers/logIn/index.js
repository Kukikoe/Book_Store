import React, {Component} from 'react'
import { connect } from 'react-redux'
import './logIn.css'
import {validateRegistrationLogIn} from '../../constants/validateConstants'
import { logInRequest } from '../../actions/authenticate'
import { getUserIsSignInState } from '../../userSelector'
import PropTypes from 'prop-types'
import $ from "jquery"


const propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired
};

class AuthPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            buttonClick: false,
            isUser: false
        };
    }

    logInOnClick = (event) => {
        this.setState({buttonClick: true});
        if (this.state.formValid) {
            this.props.logIn(this.state.email, this.state.password);
            this.setState({email: '', password: ''});
        }
        event.preventDefault();
        this.isLogIn(event);
    };

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    };

    validateField = (fieldName, value) => {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'email':
                emailValid = (validateRegistrationLogIn.email).test(value);
                break;
            case 'password':
                passwordValid = (validateRegistrationLogIn.password).test(value);
                break;
            default:
                break;
        }
        this.setState({
            emailValid,
            passwordValid,
            formValid: emailValid && passwordValid
        });
    };

    popupHide(event) {
        if (event.target) {
            event = event.target;
        }
        $(event).closest(".modal").find(".close").trigger("click");
    };

    isLogIn() {
        if (!this.state.formValid) {
            return false;
        }
        let self = this;
        setTimeout(function () {
            if (!self.props.isSignIn) {
                return self.setState({isUser: true});
            }
            else {
                self.popupHide(document.getElementById('registr-popup-signup-btn'));
            }
        }, 100);
    };


    render() {
        return (
            <div>
                <form>
                    <div className="modal fade auth-popup" id="auth-popup" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 className="modal-title">Authorization</h4>
                                </div>
                                <div className="modal-body">
                                    <input  type="email" className="form-control" placeholder="Your e-mail" name="email"
                                           maxLength={30} value={this.state.email} onChange={this.handleChangeInput}/>
                                    <input type="password" className="form-control" placeholder="Your password"
                                           name="password"
                                           maxLength={30} value={this.state.password}
                                           onChange={this.handleChangeInput}/>
                                </div>
                                <div className="error-valid" style={{display: !this.state.buttonClick ? 'none': 'block'}}>
                                    <p style={{display: this.state.emailValid ? 'none': 'block'}}>Email do not correct</p>
                                    <p style={{display: this.state.passwordValid ? 'none': 'block'}}>Password do not correct</p>
                                    <p style={{display: !this.state.isUser ? 'none': 'block'}}>Such user is not exist</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary"
                                            onClick={this.logInOnClick}>Log in
                                    </button>
                                </div>
                                <div className="modal-link">
                                    <button type="button" className="btn btn-link">I forgot my password
                                    </button>
                                    <button type="button" className="btn btn-link" data-toggle="modal"
                                            data-target="#registr-popup" id="registr-popup-signup-btn"
                                            onClick={(e) => this.popupHide(e)}>Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

AuthPopup.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        isSignIn: getUserIsSignInState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logIn: (login, password) => dispatch(logInRequest(login, password))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPopup);
