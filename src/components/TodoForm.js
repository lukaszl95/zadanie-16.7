import React from 'react';
import style from './TodoForm.css';

const FormTodo = props => {
    return ( 
        <form className={style.TodoForm} onSubmit={props.formSubmit}>
            <input id='text' onChange={props.inputChange} value={props.inputValue}/>
            <button type='submit'>+</button>
        </form>
    )
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    formSubmit(event) {
        event.preventDefault();
        let todo = this.state.input;
    	this.props.addTodo(todo);
    	this.setState({
        	 input: ''
    	});
    }

    inputChange(event) {
        let text = event.target.value;
        this.setState({
            input: text
        });
    }

    render() {
        return (
            <FormTodo 
                inputChange={this.inputChange.bind(this)} 
                formSubmit={this.formSubmit.bind(this)} 
                inputValue={this.state.input}
            />
        )
    }
}
export default TodoForm;