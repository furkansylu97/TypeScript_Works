import './App.css'
import Home from './components/Home'
import Instructor from './components/Instructor'

function App() {

  const instructer = {
    firstName : 'Ahmat Mirzat',
    lastName :'Meşe',
  }

  return (
    <>
      <Home name = 'Furkan Soylu' courseNumber = {15} isBest={true} />
      <Instructor instructureInfo = {instructer} />
    </>
  )
}

export default App
