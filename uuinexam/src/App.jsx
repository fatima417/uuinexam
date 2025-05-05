//Importerte nødevendige komponenter og funksjonenen fra React Router og egne filer
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import EventPage from "./Pages/EventPage";
import CategoryPage from "./Pages/CategoryPage";
import Dashboard from "./Pages/Dashboard";

//Hovedfunksjonen for appen 
function App(){
  return (
    //Router gir appen mulighet til å bruke rutenavigasjonen
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/event/:id" element={<EventPage />}/>
          <Route path="/category/:slug" element={<CategoryPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </main>
    </Router>
  );
}

//Gjør App-komponenten tilgjengelig for andre filene 
export default App;
