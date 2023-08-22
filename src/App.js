import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Services from './pages/Services';
import Home from './pages/Home'
import Scholarships from './pages/Scholarships'
import ExchangePrograms from './pages/ExchangePrograms'
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Scholarships" element = {<Scholarships/>}/>
      <Route path="/ExchangePrograms" element = {<ExchangePrograms/>}/>
      <Route path="/Services" element = {<Services/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
