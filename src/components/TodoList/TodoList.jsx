import React, { Component } from 'react'
import todo from '../../todo.json'
import ToDo from '../ToDo/ToDo'
import FormToDo from '../FormToDo/FormToDo'
import { nanoid } from 'nanoid'

class TodoList extends Component {
    state = {
		todoList: todo,
		isDelete: false,
		isCreate: false,
	}

	
	
	// пропс завжди перший (або _), стейт завжди другий
	componentDidUpdate(_, prevState) {
		// if (prevState.todoList.length !== this.state.todoList.length)
		// 	console.log('Edit todo list')

		// if (prevState.todoList.length > this.state.todoList.length)
		// 	console.log('Del');
		// if (prevState.todoList.length < this.state.todoList.length)
		// 	console.log('Add');

		if (prevState.todoList.length > this.state.todoList.length)
		{
			this.setState({ isDelete: true })
			setTimeout(() => {
				this.setState({ isDelete: false })				
			}, 1500);		
		}

		if (prevState.todoList.length < this.state.todoList.length) {
			this.setState({ isCreate: true })
			setTimeout(() => {
				this.setState({ isCreate: false })
			}, 1500)
		};		
		} 

    handleCheckCompleted = (id) => {
		this.setState((prevState) => ({
			todoList: prevState.todoList.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		}))
    }
    
    handleDelete = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.filter((todo) => todo.id !== id),
		}))
	}

	addToDo = (value) => {
		this.setState((prev) => {
			return {
				todoList: [
					...prev.todoList,
					{ "id": nanoid(), "title": value, "completed": false }
				], 
			}
		})
	}
	
	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				{this.state.isDelete && (<div className="alert alert-danger" role="alert">
					To-do delete successfully!
				</div>)}

				{this.state.isCreate && (<div className="alert alert-success" role="alert">
					To-do create successfully!
				</div>)}
				
				<FormToDo addToDo={this.addToDo} />
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
                        <ToDo
                            key={todo.id}
							todo={todo}
							handleCheckCompleted={this.handleCheckCompleted}
                            handleDelete={this.handleDelete}
                        />
					))}
				</ul>
			</>
		)
	}
}

export default TodoList