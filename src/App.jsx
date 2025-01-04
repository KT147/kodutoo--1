import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Books from "./pages/Books";
import Avaleht from "./pages/Avaleht";

function App() {
  return (
    <>
      <Link to="/books">
        <button>Books</button>
      </Link>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="/" element={<Avaleht />} />
      </Routes>
    </>
  );
}

export default App;