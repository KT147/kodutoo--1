import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Books from "./pages/Books";
import Avaleht from "./pages/Avaleht";
import Numbrid from "./pages/Numbrid";

function App() {
  return (
    <>
     <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/books">
        <button>Books</button>
      </Link>
      <Link to= "/numbrid">
      <button>Numbrid</button>
      </Link>

      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="/" element={<Avaleht />} />
        <Route path="/numbrid" element={<Numbrid/>}/>
      </Routes>
    </>
  );
}

export default App;