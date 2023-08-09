import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="" >Home</Link>
            <Link to="/about" >About</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// https://passportindia.gov.in/AppOnlineProject/online/gepOnlineApp
// https://www.youtube.com/watch?v=Dtm9fOnzqWU

// https://www.youtube.com/watch?v=nDGA3km5He4 - RR - 35.00 