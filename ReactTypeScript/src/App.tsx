import './App.css'
import Home from './components/Home'
import Instructor from './components/Instructor'

function App() {

  return (
    <>
      <Home name = 'Furkan Soylu' courseNumber = {15} isBest={true} />
      <Instructor />
    </>
  )
}

export default App
