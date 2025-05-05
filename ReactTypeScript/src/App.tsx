import './App.css'
import EventActions from './components/EventActions'
import Home from './components/Home'
import Instructor from './components/Instructor'
import InstructorList from './components/InstructorList'
import LoginCheck from './components/LoginCheck'
import ReducerExample from './components/ReducerExample'
import Request from './components/Request'

function App() {

  const instructer = {
    firstName : 'Ahmat Mirzat',
    lastName :'Meşe',
  }

  const instructerList = [
    {
      firstName : 'Mehmet',
      lastName :'Hattapoğlu',
    },
    {
      firstName : 'Ömer',
      lastName :'Güldaş',
    },
    {
      firstName : 'Arif',
      lastName :'Sevi',
    }
  ]

  return (
    <>
      <Home name = 'Furkan Soylu' courseNumber = {15} isBest={true} />
      <Instructor instructureInfo = {instructer} />
      <InstructorList instructureListInfo = {instructerList} />
      <Request status = 'loading' />
      <EventActions />
      <LoginCheck />
      <ReducerExample />
    </>
  )
}

export default App
