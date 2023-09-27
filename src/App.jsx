import Card from './components/Card-1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='h-screen bg-very-dark-blue flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<Card />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
