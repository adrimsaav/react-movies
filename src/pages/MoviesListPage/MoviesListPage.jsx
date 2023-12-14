import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>Movies List Page</h1>
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </>
  );
}