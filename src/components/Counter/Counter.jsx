import React, { useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
	// const [total, setTotal] = useState(0)
	const { total, step } = useSelector((state) => state)
	
	const dispatch = useDispatch()

	const handleClickPlus = () => dispatch({type:'increment', payload: step})

	const handleClickMinus = () => dispatch({type:'decrement', payload: step})

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


export default Counter