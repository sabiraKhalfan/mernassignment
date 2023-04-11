
import './App.css';
import ListUser from './Components/ListUser';
import Login from './Components/Login';
import Register from './Components/Register';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/register" element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path ="/login" element={<Login/>}/>
      </Routes>
      {/* <Routes>
        <Route path ="/list" element={<ListUser/>}/>
      </Routes> */}
      </BrowserRouter>
    
    </div>
  );
}

export default App;
