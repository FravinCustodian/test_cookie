import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./component/login";
import AfterLogin from "./component/afterLogin";
import Test from "./component/Test";
const App =() => {
  return (
    <div className="App">
        New Test
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
            <Route path='/code' element={<AfterLogin/>}></Route>
            <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
