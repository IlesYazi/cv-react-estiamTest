import "./App.css";
import App2 from "./App2";

import Navigation from "./composant/Navigation";
import Modification from "./composant/Modification";
import Inexistant from "./composant/Inexistant";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App2 />}></Route>
        <Route path="/modification" element={<Modification />} />
        <Route path="*" element={<Inexistant />} />
      </Routes>
    </Router>
  );
};

export default App;
