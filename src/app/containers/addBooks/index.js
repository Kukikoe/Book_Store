import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../../components/navbar/index';
import './add-book.css';
import {validateRegistrationLogIn} from "../../constants/validateConstants";
import {addBook} from '../../actions';

class AddBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            author: '',
            pages: '',
            description: '',
            price: '',
            nameValid: false,
            authorValid: false,
            pagesValid: false,
            descriptionValid: false,
            priceValid: false,
            formValid: false
        };
        this.fileInput = React.createRef();
    }

    handleSubmit = (event) => {
        this.props.addBook(this.state.name, this.state.author, this.state.pages, this.state.description, this.state.price, this.imageEncoded);
        event.preventDefault();
    };

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleImage = () => {
        const [file] = this.fileInput.current.files;
        const reader = new FileReader();


        reader.addEventListener('load', (event) => {
            this.imageEncoded = event.target.result;
        })
        reader.readAsDataURL(file)
    }

    validateField = (fieldName, value) => {
        let nameValid = this.state.nameleValid;
        let authorValid = this.state.authorValid;
        let pagesValid = this.state.pagesValid;
        let descriptionValid = this.state.descriptionValid;
        let priceValid = this.state.priceValid;
        switch (fieldName) {
            case 'name':
                nameValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'author':
                authorValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'pagesQuantity':
                pagesValid = (validateRegistrationLogIn.pages).test(value);
                break;
            case 'description':
                descriptionValid = (validateRegistrationLogIn.name).test(value);
                break;
            case 'price':
                priceValid = (validateRegistrationLogIn.price).test(value);
                break;
            default:
                break;
        }
        this.setState({
            nameValid,
            authorValid,
            pagesValid,
            descriptionValid,
            priceValid,
            formValid: nameValid && authorValid && pagesValid && descriptionValid && priceValid
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Navbar/>
                    <div className="container">
                        <div className="row">
                            <div className="add-product-layout col-md-6 col-md-offset-3">
                                <label>Enter name of the book:
                                    <input type="text" className="form-control" placeholder="book title"
                                           name="name" maxLength={40} value={this.state.name}
                                           onChange={this.handleChangeInput}/>
                                </label>
                                <label>Enter author:
                                    <input type="text" className="form-control" placeholder="author"
                                           name="author" maxLength={40} value={this.state.author}
                                           onChange={this.handleChangeInput}/>
                                </label>
                                <label>Enter pages:
                                    <input type="number" className="form-control" placeholder="pages"
                                           name="pages" maxLength={20} value={this.state.pages}
                                           onChange={this.handleChangeInput}/>
                                </label>
                                <label>Enter description:
                                    <textarea className="textarea-descript form-control " placeholder="description"
                                              name="description" maxLength={2000} value={this.state.description}
                                              onChange={this.handleChangeInput}>
                                    </textarea>
                                </label>
                                <label>Enter price:
                                    <input type="text" className="form-control" placeholder="price"
                                           name="price" maxLength={20} value={this.state.price}
                                           onChange={this.handleChangeInput}/>
                                </label>
                                <div className="choose-image">
                                    <p><input onChange={this.handleImage} type="file" name="photo" multiple accept="image/*,image/jpeg" ref={this.fileInput}/></p>
                                </div>
                                <div className="add-book-btn">
                                    <button type="submit" className="btn btn-primary">Add book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addBook
};

export default connect(null, mapDispatchToProps)(AddBooks);