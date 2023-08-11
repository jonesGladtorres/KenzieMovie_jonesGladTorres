import { useContext } from "react"
import { HomeMovieCard } from "../HomeMovieCard"
import { MovieContext } from "../../providers/MovieContext"
import { StyledHomeMovieList} from "./style"

export const HomeMovieList = () => {
  
  const { movieList } = useContext(MovieContext)

  const moviesToRender = movieList.slice(1)

  return (
    <StyledHomeMovieList>
      {moviesToRender.map((movie) => (
        <HomeMovieCard key={movie.id} movie={movie} />
      ))}
    </StyledHomeMovieList>
  )
}
