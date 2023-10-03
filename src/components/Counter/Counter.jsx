import React, { Component, PureComponent, useState } from 'react'


const Counter = () => {
	const [total, setTotal] = useState(0)
	const handleClickPlus = () => {
		setTotal((prevTotal)=>prevTotal+1)
		// setState((prevState) => ({total: prevState.total + 1}))
	}

	const handleClickMinus = () => {
		setTotal((prevTotal)=>prevTotal-1)
		// setState((prevState) => ({total: prevState.total - 1}))
	}

  return (
	<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{total}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button
								className='btn btn-outline-success me-5'
								onClick={handleClickPlus}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							{/* <Button
								// obj={{ name: 'asd' }}
								handleClickPlus={handleClickPlus}
							/> */}
							<button
								className='btn  btn-outline-danger ms-5'
								onClick={handleClickMinus}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
  )
}

// class Button extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	// console.log('nextProps :>> ', nextProps)
	// 	// console.log('this.props :>> ', this.props)
	// 	if (
	// 		nextProps.handleClickPlus === this.props.handleClickPlus &&
	// 		nextProps.obj === this.props.obj )
	// 		return false
	// 	return true
	// }
// 	render() {
// 		console.log('render Btn :>> ')
// 		return (
// 			<button
// 				className='btn btn-outline-success me-5'
// 				onClick={this.props.handleClickPlus}
// 			>
// 				<i className='bi bi-plus-circle fs-1'></i>
// 			</button>
// 		)
// 	}
// }

// class Counter extends Component {
// 	state = {
// 		total: 0,
// 	}

// 	handleClickPlus = () => {
// 		this.setState((prevState) => ({total: prevState.total + 1}))
// 	}

// 	handleClickMinus = () => {
// 		this.setState((prevState) => ({total: prevState.total - 1}))
// 	}

// 	handleClickBtn = () => {
// 		const { name, count } = this.props
// 		console.log('name')
// 		const age = count ?? 10
// 		console.log('age')
// 	}

// 	render() {
// 		console.log('render')
// 		return (
// 			<div className='position-absolute top-50 start-50 translate-middle'>
// 				<div
// 					className='card bg-dark text-white '
// 					style={{ width: '600px' }}
// 				>
// 					<div className='card-body'>
// 						<h5 className='card-title text-center fs-1'>Counter</h5>
// 						<p
// 							className='card-text  text-center'
// 							style={{ fontSize: '80px' }}
// 						>
// 							{this.state.total}
// 						</p>
// 						<div className='d-flex justify-content-center px-5'>
// 							{/* <button
// 								className='btn btn-outline-success me-5'
// 								onClick={this.handleClickPlus}
// 							>
// 								<i className='bi bi-plus-circle fs-1'></i>
// 							</button> */}
// 							<Button
// 								// obj={{ name: 'asd' }}
// 								handleClickPlus={this.handleClickPlus}
// 							/>
// 							<button
// 								className='btn  btn-outline-danger ms-5'
// 								onClick={this.handleClickMinus}
// 							>
// 								<i className='bi bi-dash-circle fs-1'></i>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}

    // state = {
    //     value: 0,
    // }
    // handleClickIncrement = () => {
    //     this.setState((prevState) => ({value: prevState.value + 1}))
    // }
    // handleClickDecrement = () => {
    //     this.setState((prevState) => ({value: prevState.value - 1}))
	// }
	
    // render() {
    //     const {value} = this.state
    //     return (
	// 	<div className='position-absolute top-50 start-50 translate-middle'>
	// 		<div
	// 			className='card bg-dark text-white '
	// 			style={{ width: '600px' }}
	// 		>
	// 			<div className='card-body'>
	// 				<h5 className='card-title text-center fs-1'>Counter</h5>
	// 				<p
	// 					className='card-text  text-center'
	// 					style={{ fontSize: '80px' }}
	// 				>
	// 					{value}
	// 				</p>
	// 				<div className='d-flex justify-content-center px-5'>
	// 					<button
	// 						className='btn btn-outline-success me-5'
	// 						onClick={this.handleClickIncrement}
	// 					>
	// 						<i className='bi bi-plus-circle fs-1'></i>
	// 					</button>
	// 					<button
	// 						className='btn  btn-outline-danger ms-5'
	// 						onClick={this.handleClickDecrement}
	// 					>
	// 						<i className='bi bi-dash-circle fs-1'></i>
	// 					</button>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
    // }


export default Counter