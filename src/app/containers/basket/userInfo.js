import React, {Component} from 'react';
import './basket.css';
import {getUserIsSignInState, getCurrentUserNameState, getCurrentUserPhoneState, getCurrentUserEmailState} from "../../userSelector";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {validateRegistrationLogIn} from "../../constants/validateConstants";
import { basketUserInfoChekout } from '../../actions/index'
const propTypes = {
    isSignIn: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhone: PropTypes.string,
    userInfo: PropTypes.func.isRequired
};

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            nameValid: false,
            emailValid: false,
            formValid: false,
            buttonClick: false
        };
    }
    componentWillMount() {
        if(this.props.isSignIn) {
            this.setState({name: this.props.userName, email: this.props.userEmail, phone: this.props.userPhone});
        }
        else {
            this.setState({name: '', email: '', phone: ''});
        }
    }

    buyOnClick = (event) => {
        this.setState({buttonClick: true});
        if (this.state.formValid) {
            this.props.userInfo(this.state.name, this.state.email, this.state.phone);
            this.setState({name: '', email: '', phone: ''});
        }
        event.preventDefault();
    };

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    };

    validateField = (fieldName, value) => {
        let nameValid = this.state.nameValid;
        let phoneValid = this.state.phoneValid;
        let emailValid = this.state.emailValid;
        switch (fieldName) {
            case 'name':
                nameValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'phone':
                phoneValid = (validateRegistrationLogIn.phone).test(value);
                break;
            case 'email':
                emailValid = (validateRegistrationLogIn.email).test(value);
                break;
            default:
                break;
        }
        this.setState({
            nameValid,
            phoneValid,
            emailValid,
            formValid: nameValid && phoneValid && emailValid
        });
    };

    render() {
        return (
            <div>
            <div className="col-md-9 heading-personal-info">
                <h5>Enter your personal information:</h5>
            </div>
            <div className='col-md-9'>
            <div className='basket-user-info'>
            <input type="text" className="form-control" placeholder="Your name" name="name"
                   maxLength={30} value={this.state.name} onChange={this.handleChangeInput}/>
                <input type="tel" className="form-control" placeholder="Your phone number"
        name="phone" maxLength={30} value={this.state.phone} onChange={this.handleChangeInput}
            />
            <input type="email" className="form-control" placeholder="Your email"
        name="email" maxLength={30} value={this.state.email} onChange={this.handleChangeInput}/>
            </div>
    </div>
                <div className='col-md-9'>
                <div className="error-valid-info" style={{display: !this.state.buttonClick ? 'none': 'block'}}>
                    <p className="error-valid-info" style={{display: !this.state.buttonClick && this.state.nameValid ? 'none': 'block'}}>Name do not correct</p>
                    <p style={{display: this.state.phoneValid ? 'none': 'block'}}>Phone do not correct</p>
                    <p style={{display: this.state.emailValid ? 'none': 'block'}}>Email do not correct</p>
                </div>
                </div>
                <div className='col-md-9'>
                <button
                    className='btn btn-success'
                    onClick={this.buyOnClick}>
                    Buy
                </button>
                </div>
            </div>
    );
    }
    }

UserInfo.propTypes = propTypes;

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isSignIn: getUserIsSignInState(state),
        userName: getCurrentUserNameState(state),
        userEmail: getCurrentUserEmailState(state),
        userPhone: getCurrentUserPhoneState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        userInfo: (name, email, phone) => dispatch(basketUserInfoChekout(name, email, phone))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);


