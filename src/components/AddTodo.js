import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    addTodoInputOnChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    addTodoOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
    return (
      <form onSubmit={this.addTodoOnSubmit} style={{ display: 'flex' }}> 
        <input 
        type="text" 
        name="title" 
        placeholder="Add Todo ..." 
        style={{ flex: '10', padding: '5px' }}        
        value={this.state.title}
        onChange={this.addTodoInputOnChange}
        />
        <input 
        type="submit"
        value="Submit"
        className="btn"
        style={{flex: '1'}}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
