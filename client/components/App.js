import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Todos from './Todos';
import CreateTodo from './CreateTodo';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/todos';
import EditTodo from './EditTodo';

class App extends Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Router>
        <div id='main'>
          <h1>
            <Link to='/'>Tasks ({this.props.todos.length})</Link>
          </h1>
          <Link to='/todos/create'>Create A New Task</Link>
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route path='/todos/create' component={CreateTodo} />
            <Route path='/todos/:id' component={EditTodo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
