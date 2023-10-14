import React, { useEffect, useState } from 'react'
// import todo from '../../todo.json'
import ToDo from '../ToDo/ToDo'
import FormToDo from '../FormToDo/FormToDo'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'
import FormFilterTodo from '../FormToDo/FormFilterTodo'
import { useSearchParams } from 'react-router-dom'
import { createTodo } from '../../store/todo/actions'
import { useDispatch, useSelector } from 'react-redux'


const TodoList = () => {
	// const [todoList, setTodoList] = useState('')
	const { todo: todoList } = useSelector((state) => state.todo)
	
	const [filteredTodoList, setFilteredTodoList] = useState(todoList)

	const [searchParams, setSearchParams] = useSearchParams()
	const filterText = searchParams.get('filter') ?? ''
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	const localTodo = localStorage.getItem('todo')
	// 	if (localTodo)
	// 		setTodoList(JSON.parse(localTodo))
	// }, [])

	// useEffect(() => {
	// 	todoList && localStorage.setItem('todo', JSON.stringify(todoList))
	// }, [todoList])
	
	useEffect(() => {
		todoList &&
			setFilteredTodoList(
				todoList.filter((todo) =>
					todo.title
						.toLowerCase()
						.includes(filterText.trim().toLowerCase())
				)
			)
	}, [filterText, searchParams, todoList])

	const handleCheckCompleted = (id) => {
		// setTodoList((prevTodoList) => {
		// 	return prevTodoList.map((todo) =>
		// 		todo.id === id
		// 			? { ...todo, completed: !todo.completed }
		// 			: todo
		// 	)			
		// })
	}
    
	const handleDelete = (id) => {
		// setTodoList((prevTodoList) => {
		// 	return prevTodoList.filter((todo) => todo.id !== id)
		// })
		toast.error('Deleted successfully ')
	}

	const addToDo = (value) => {
		// setTodoList((prevTodoList) => {
		// 	return [
		// 			...prevTodoList,
		// 			{ id: nanoid(), title: value, completed: false }
		// 		]
		// })
		dispatch (createTodo(value))
		toast.success('Created successfully ')
	}

  return (
			<>
		  <h1>My To-Do list</h1>
		  <FormFilterTodo
				setSearchParams={setSearchParams}
				filterText={filterText}
			/>
				<FormToDo addToDo={addToDo} />
				{filteredTodoList && (
					<ul className='list-group list-group-flush'>
						{filteredTodoList.map((todo) => (
							<ToDo
								key={todo.id}
								todo={todo}
								handleCheckCompleted={handleCheckCompleted}
								handleDelete={handleDelete}
							/>
						))}
					</ul>
				)}
			</>
		)
}

export default TodoList

// class TodoList extends Component {
//     state = {
// 		todoList: '',
// 		isDelete: false,
// 		isCreate: false,
// 	}

// 	componentDidMount() {
// 		// localStorage.setItem('todo', JSON.stringify(todo))
// 		if (localStorage.getItem('todo'))
// 			this.setState({
// 				todoList: JSON.parse(localStorage.getItem('todo')),
// 			})
// 	}
	
// 	// пропс завжди перший (або _), стейт завжди другий
// 	componentDidUpdate(_, prevState) {
// 		// if (prevState.todoList.length !== this.state.todoList.length)
// 		// 	console.log('Edit todo list')

// 		// if (prevState.todoList.length > this.state.todoList.length)
// 		// 	console.log('Del');
// 		// if (prevState.todoList.length < this.state.todoList.length)
// 		// 	console.log('Add');

// 		if (prevState.todoList.length > this.state.todoList.length) {
// 			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
// 			this.setState({
// 				isDelete: true,
// 				// todo: localStorage.getItem('todo'),
// 			})
// 			setTimeout(() => {
// 				this.setState({ isDelete: false })
// 			}, 1500)
// 		}
// 		if (prevState.todoList.length < this.state.todoList.length) {
// 			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
// 			this.setState({
// 				isCreate: true,
// 				// todo: localStorage.getItem('todo'),
// 			})
// 			setTimeout(() => {
// 				this.setState({ isCreate: false })
// 			}, 1500)
// 		}		
// 		} 

//     handleCheckCompleted = (id) => {
// 		this.setState((prevState) => ({
// 			todoList: prevState.todoList.map((todo) =>
// 				todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 			),
// 		}))
// 	}
    
//     handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.filter((todo) => todo.id !== id),
// 		}))
// 	}

// 	addToDo = (value) => {
// 		this.setState((prev) => {
// 			return {
// 				todoList: [
// 					...prev.todoList,
// 					{ "id": nanoid(), "title": value, "completed": false }
// 				], 
// 			}
// 		})
// 	}
	
// 	render() {
// 		return (
// 			<>
// 				<h1>My To-Do list</h1>
// 				{this.state.isDelete && (
// 					<div className='alert alert-danger' role='alert'>
// 						To-do delete successfully!
// 					</div>
// 				)}
// 				{this.state.isCreate && (
// 					<div className='alert alert-success' role='alert'>
// 						Create to-do successfully!
// 					</div>
// 				)}
// 				<FormToDo addToDo={this.addToDo} />
// 				{this.state.todoList && (
// 					<ul className='list-group list-group-flush'>
// 						{this.state.todoList.map((todo) => (
// 							<ToDo
// 								key={todo.id}
// 								todo={todo}
// 								handleCheckCompleted={this.handleCheckCompleted}
// 								handleDelete={this.handleDelete}
// 							/>
// 						))}
// 					</ul>
// 				)}
// 			</>
// 		)
// 	}
// }

// export default TodoList