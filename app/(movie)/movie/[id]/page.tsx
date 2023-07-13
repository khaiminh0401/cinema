import { movieAPI } from '@/util/API/Movie';

export default async function Movie({params}:any) {
  const movie = await movieAPI.findById(params.id);
  return (
    <div>
      movie {movie.name}
    </div>
  );
}




