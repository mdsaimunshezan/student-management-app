import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Added from './components/Added/Added';
import Show from './components/Show/Show';
import Delete from './components/Delete/Delete';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import StoreContext from './components/Context/StoreContext';

function App() {
  return (
    <div>
      <StoreContext>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Added />} />
            <Route path="/show" element={<Show />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StoreContext>
    </div>
  );
}

export default App;
