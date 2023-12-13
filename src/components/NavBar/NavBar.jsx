import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Movies List Page</Link>
      &nbsp; | &nbsp;
      <Link to="/movies/:movieName">Movie Detail</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
    </nav>
  );
}