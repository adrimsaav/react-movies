import { Link } from 'react-router-dom';

export default function NavBar() {
  const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to="/">Movies List Page</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
    </nav>
  );
  }
}