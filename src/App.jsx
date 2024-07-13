import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:title" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
