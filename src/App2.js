import "./App.css";
import User from "./composant/User";
import Skills from "./composant/Skills";
import Resumer from "./composant/Resumer";
import Experience from "./composant/Experience";
import Formation from "./composant/Formation";
import DarkMode from "./composant/DarkMode";


const App2 = () => {
    return (
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <User></User>
            <Skills></Skills>
          </div>
          <div className="main">
            <aside>
              <DarkMode />
            </aside>
            <Resumer />
            <Formation />
            <Experience />
          </div>
        </div>
      </div>
    );
  };
  
  export default App2;