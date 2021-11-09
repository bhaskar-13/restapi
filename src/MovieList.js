import { Movie } from "./Movie";
export function MovieList({ movies }) {
  console.log(movies);
  return (
    <section className="movie-list">
      {movies.map((mv,idx) => <Movie key={idx}
        name={mv.MovieName}
        rating={mv.rating}
        summary={mv.summary}
        pic={mv.Poster} />
      )}
    </section>
  );
}
