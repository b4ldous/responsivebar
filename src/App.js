import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
