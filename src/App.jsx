
import { Register } from './components/Register';
import { Welcome } from './components/Welcome';
import {Login } from './components/Login';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/welcome' element={<Welcome />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
