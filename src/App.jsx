import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './routes/Home'
import About from './routes/About';
import Lagos from './routes/Lagos';
import ComingSoon from './routes/ComingSoon';
import Devs from './routes/Devs';
import Alia from './routes/Alia';

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/desarrollo-lagos" element={<Lagos />} />
          <Route path="/desarrollo-alia" element={<Alia />} />
          <Route path="/coming-soon-vm" element={<ComingSoon />} />
          <Route path="/desarrollos" element={<Devs />} />
        </Routes>
    </div>
  )
}

export default App
