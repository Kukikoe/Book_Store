import React, {Component} from 'react'

import {connect} from 'react-redux'
import {searchBooks} from '../../actions'

class Search extends Component {
    constructor (props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange  (event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit (event){
        event.preventDefault();
        this.props.searchBooks(this.state.value)
    }

    render () {
        return (
            <div className='well blosd'>
                <h3 className='lead'>Search</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            className='form-control'
                        />
                    </form>
                    <span className='input-group-btn'>
          <button className='btn btn-default'>
            <span className='glyphicon glyphicon-search'/>
          </button>
        </span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchBooks
};

export default connect(null, mapDispatchToProps) (Search)
