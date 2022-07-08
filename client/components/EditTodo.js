import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo} from '../store/todos'

class EditTodo extends React.Component {

    render(){
        return(
            <button>DELETE</button>
        )
    }
}

// const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(null, mapDispatchToProps)(EditTodo)