// import Header from './Header/Header'
// import Counter from './Counter/Counter'
// import Modal from './Modal/Modal'
// import { useState } from 'react'
// import TodoList from "./TodoList/TodoList"
// import FormLogin from './FormLogin/FormLogin'
// import { nanoid } from 'nanoid'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import { Toaster } from 'react-hot-toast'
// import TestUseMemo from './TestUseMemo/TestUseMemo'
import { Route, Routes } from 'react-router-dom'

// import NewsPage from './pages/NewsPage'
// import TodoPage from './pages/TodoPage'
import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
// import ToDoDetails from './ToDo/ToDoDetails'
import { Suspense, lazy } from 'react'
import RegistrationPage from './pages/RegistrationPage'
import { useSelector } from 'react-redux'
// import LoginPage from './pages/LoginPage'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))

const App = () => {
  const isAuth = useSelector((state) => state.auth.access_token)
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path='news' element={<NewsPage/>}/>
        <Route path='todo' element={<TodoPage />} />
        <Route path='todo/:id' element={<ToDoDetails />} />
        <Route path='products' element={<ProductsPage />} />
        
      </Route>
      <Route
				path='/login'
				element={
					<Suspense>
						<LoginPage />
					</Suspense>
				}
      />
      <Route
				path='/signUp'
				element={
					<Suspense>
						<RegistrationPage />
					</Suspense>
				}
			/>
    </Routes>
  )
}

export default App;