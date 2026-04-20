export default async function Movie({ search, type }: any) {
  const api = "fdbe6157";

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${api}&s=${search}&type=${type}`,
    {
      cache: "force-cache", // ✅ cache response
    }
  );

  const data = await res.json();
  const movies = data.Search || [];

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie: any) => (
        <div key={movie.imdbID}>
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
}