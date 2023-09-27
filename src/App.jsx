import Card from './components/Card-1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checked from './components/CardChecked'

function App() {

  return (
    <Router>
      <div className='h-screen bg-very-dark-blue flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<Card/>} />
          <Route path='/checked' element={<Checked/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
