import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <nav>
        <Link to="city">City</Link>
        <Link to="ninjago">Ninjago</Link>
        <Link to="castlesandknights">Castles & Knights</Link>
        <Link to="marineandpirates">Marine & Pirates</Link>
        <Link to="moviecharacters">Movie characters</Link>
      </nav>
    )
  }