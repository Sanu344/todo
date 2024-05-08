import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Main from "./components/mainpage";
import Protected from "./components/protected";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
