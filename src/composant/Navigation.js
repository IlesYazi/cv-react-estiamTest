import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <h1>Une Modification ?</h1>
        <div>
          <Link to="/">
            <button>retour CV</button>
          </Link>
          <Link to="/modification">
            <button>Modifier les formations</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
