import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import SignUp from "./SignUp";
import PrivateComponent from "./PrivateComponent";
import Home from "./Home";
import Login from './Login';

function App() {
  return (
    <>
    <h1 className="wel">Welcome</h1>
      <Homepage/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<h1>About details are here!</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        </Route>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
