import Header from './Header/Header'
// import Counter from './Counter/Counter'
import Modal from './Modal/Modal'
import { Component, useState } from 'react'
import TodoList from "./TodoList/TodoList"
import FormLogin from './FormLogin/FormLogin'
import { nanoid } from 'nanoid'
import Search from './Search/Search'
import ContentInfo from './ContentInfo/ContentInfo'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [searchText, setSearchText] = useState('')

  const showModal = () => setIsShowModal(true)

  const closeModal = () => setIsShowModal(false)

  function createUser(data) {
    const newUser = {
      ...data,
      id: nanoid()
    }
    console.log('newUser :>> ', newUser)
  }
  
  const handleSearch = (searchText) => {
    setSearchText(searchText)
  }
  
  return (
    <div className='container'>
      <Toaster
        position="top-right"
        toastOptions={{duration:1500}}
      />
      <Header showModal={showModal} />
      {/* <Counter /> */}
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      <TodoList/>
      {isShowModal &&
        (<Modal closeModal={closeModal}>
          <FormLogin
            closeModal={closeModal}
            createUser={createUser} />
        </Modal>
        )}
    </div>
  )
}


// class App extends Component {
//   state = {
//     isShowModal: false,
//     searchText:'',
//   }


//   showModal = () => {
//     this.setState({isShowModal: true})
//   }

//   closeModal = () => {
//     this.setState({isShowModal: false})
//   }

//   createUser = (data) => {
// 		const newUser = {
//       ...data,
//       id:nanoid()
// 		}
// 		console.log('newUser :>> ', newUser)
//   }
  
//   handleSearch = (searchText) => {
//     this.setState({searchText})
//   }

//   render() {
//     return (
// 			<div className='container'>
//         <Header showModal={this.showModal} />
//         {/* <Counter /> */}
//         <Search handleSearch={this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
// 				{/* <TodoList/> */}
//         {/* {this.state.isShowModal &&
//           (<Modal closeModal={this.closeModal}>
//           <FormLogin
//             closeModal={this.closeModal}
//             createUser={this.createUser} />
//           </Modal>
//           )}         */}
// 			</div>
// 		)
//   }
// }

export default App;