import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={style.Todo}>
                <button onClick={event => this.handleClick()}>X</button>
                {this.props.todo}
            </li>
        )
    }
    handleClick(event) {
        this.props.remove(this.props.id);
    }
}
export default Todo;