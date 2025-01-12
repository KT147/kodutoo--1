import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Books from "./pages/Books";
import Avaleht from "./pages/Avaleht";
import Numbrid from "./pages/Numbrid";
import NotFound from "./pages/NotFound";

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
      <Link to= "/notfound">
      <button>Not Found</button>
      </Link>

      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="/" element={<Avaleht />} />
        <Route path="/numbrid" element={<Numbrid/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;