import React from "react";
import { connect } from "react-redux";
import { deleteTodos } from "../store/todos";
import {Link} from 'react-router-dom'
import {fetchTodo} from '../store/todo'

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      assignee: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchTodo(id)
  }

  componentDidUpdate(prevProps){
    if(prevProps.taskName !== this.props.taskName){
      this.setState({ taskName: this.props.todo.taskName });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createTodo({ ...this.state });
  }

  render() {
    const { assignee, taskName } = this.state;
    const { handleSubmit } = this;
    const id = this.props.match.params.id;

    return (
      <div>
        <form id="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            name="taskName"
            onChange={this.handleChange}
            value={taskName}
          />

          <label htmlFor="assignee">Assign To:</label>
          <input
            name="assignee"
            onChange={this.handleChange}
            value={assignee}
          />

          <button type="submit">Submit</button>
          <button
          onClick={() => {
            this.props.deleteTodos(id);
            this.props.history.push("/");
          }}
        >
          DELETE
          </button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodos: (id) => dispatch(deleteTodos(id)),
    fetchTodo: (id) => dispatch(fetchTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(EditTodo);
