import React, {Component} from 'react';
import './signUp.css';
//import '../registr-auth-popup_media.css';
import {validateRegistrationLogIn} from '../../constants/validateConstants';
import { getUserIsLoadingState } from '../../userSelector'
import { registrationRequest } from '../../actions/registration';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import $ from "jquery";

const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired
};

class RegistrPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            nameValid: false,
            surnameValid: false,
            phoneValid: false,
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false
        };
    }

    signInOnClick = (event) => {
        this.setState({buttonClick: true});
        if (this.state.formValid) {
            this.props.signIn(this.state.name, this.state.surname, this.state.phone, this.state.email, this.state.password);
            this.setState({name: '', surname: '', phone: '', email: '', password: '', confirmPassword: ''});
        }
        event.preventDefault();
        this.isSignUp(event);
    };

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    };

    validateField = (fieldName, value) => {
        let nameValid = this.state.nameValid;
        let surnameValid = this.state.surnameValid;
        let phoneValid = this.state.phoneValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
        switch (fieldName) {
            case 'name':
                nameValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'surname':
                surnameValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'phone':
                phoneValid = (validateRegistrationLogIn.phone).test(value);
                break;
            case 'email':
                emailValid = (validateRegistrationLogIn.email).test(value);
                break;
            case 'password':
                passwordValid = (validateRegistrationLogIn.password).test(value);
                confirmPasswordValid = this.state.password  === this.state.confirmPassword;
                break;
            case 'confirmPasswordValid':
                confirmPasswordValid = this.state.password  === this.state.confirmPassword;
                break;
            default:
                break;
        }
        this.setState({
            nameValid,
            surnameValid,
            phoneValid,
            emailValid,
            passwordValid,
            confirmPasswordValid,
            formValid: nameValid && surnameValid && phoneValid && emailValid && passwordValid && confirmPasswordValid
        });
    };

    popupHide(event) {
        $(event.target).closest(".modal").find(".close").trigger("click");
    };

    isSignUp(event) {
        if (this.state.formValid) {
            this.popupHide(event);
        }
        else {
            return false;
        }
    }

    render() {
        return <div>
            <form>
                <div className="modal fade auth-popup" id="registr-popup" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title">Registration</h4>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" placeholder="Your name" name="name"
                                       maxLength={20} value={this.state.name} onChange={this.handleChangeInput}/>
                                <input type="text" className="form-control" placeholder="Your surname" name="surname"
                                       maxLength={30} value={this.state.surname} onChange={this.handleChangeInput}/>
                                <input type="tel" className="form-control" placeholder="Phone number" name="phone"
                                       maxLength={20} value={this.state.phone} onChange={this.handleChangeInput}/>
                                <input type="email" className="form-control" placeholder="Your e-mail" name="email"
                                       maxLength={30} value={this.state.email} onChange={this.handleChangeInput}/>
                                <input type="password" className="form-control" placeholder="Create a password"
                                       name="confirmPassword" maxLength={30} value={this.state.confirmPassword}
                                       onChange={this.handleChangeInput}/>
                                <input type="password" className="form-control" placeholder="Confirm password"
                                       name="password" maxLength={30} value={this.state.password}
                                       onChange={this.handleChangeInput}/>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="checkbox" id="checkbox" required/>
                                <label className="checkbox-label" htmlFor="checkbox">
                                    I agree with the terms of the document
                                    <button type="button" className="btn btn-link" data-toggle="modal"
                                            data-target="#policy"
                                            onClick={(e) => this.popupHide(e)}>"Security policy"</button>
                                </label>
                            </div>

                            <div className="error-valid" style={{display: !this.state.buttonClick ? 'none': 'block'}}>
                                <p style={{display: this.state.nameValid ? 'none': 'block'}}>Name do not correct</p>
                                <p style={{display: this.state.surnameValid ? 'none': 'block'}}>Surname do not correct</p>
                                <p style={{display: this.state.phoneValid ? 'none': 'block'}}>Phone do not correct</p>
                                <p style={{display: this.state.emailValid ? 'none': 'block'}}>Email do not correct</p>
                                <p style={{display: this.state.passwordValid ? 'none': 'block'}}>Password do not correct</p>
                                <p style={{display: this.state.confirmPasswordValid ? 'none': 'block'}}>Confirm password do not correct</p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" disabled={this.props.isLoading}
                                        onClick={this.signInOnClick}>Sign up
                                </button>
                            </div>
                            <div className="user-signed-up-text">
                                Already registered?
                            </div>
                            <div className="modal-link">
                                <button type="button" className="btn btn-link" data-toggle="modal" data-target="#auth-popup"
                                        onClick={(e) => this.popupHide(e)}>
                                    Log in!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>;
    }
}

RegistrPopup.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        isLoading: getUserIsLoadingState(state)
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        signIn: (name, surname, phone, email, password) => dispatch(registrationRequest(name, surname, phone, email, password))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrPopup);