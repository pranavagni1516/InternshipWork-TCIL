import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home"
import { Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App(){
  return (
    <div className="p-4 h-screen resize flex items-center justify-center">
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}
export default App;