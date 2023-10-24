import React, { Suspense, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'
import { nanoid } from 'nanoid'

const Layout = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const showModal = () => setIsShowModal(true)

    const closeModal = () => setIsShowModal(false)
    
    function createUser(data) {
    const newUser = {
      ...data,
      id: nanoid()
    }
    console.log('newUser :>> ', newUser)
    }
    
        
    return (
        <div className='container'>
            
            
            <Header showModal={showModal}/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
            {isShowModal && (
				<Modal closeModal={closeModal}>
					<FormLogin
						closeModal={closeModal}
						createUser={createUser}
					/>
				</Modal>
			)}
        </div>
  )
}

export default Layout