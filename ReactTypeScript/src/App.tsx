import './App.css'
import Home from './components/Home'
import Instructor from './components/Instructor'
import InstructorList from './components/InstructorList'

function App() {

  const instructer = {
    firstName : 'Ahmat Mirzat',
    lastName :'Meşe',
  }

  return (
    <>
      <Home name = 'Furkan Soylu' courseNumber = {15} isBest={true} />
      <Instructor instructureInfo = {instructer} />
      <InstructorList />
    </>
  )
}

export default App
