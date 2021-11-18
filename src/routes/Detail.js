import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Presenter from "../components/Presenter";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const {id} = useParams()
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovies([json.data.movie])
        setLoading(false)
        }
    useEffect(() => {
        getMovie()
    }, [])
  console.log(movies)
    return <div>{loading ? <h1>Loading...</h1> : movies.map((value) => <Presenter key={value.id} coverImg={value.medium_cover_image} title={value.title} summary={value.description_intro} genres={value.genres}/>)}</div>
}

export default Detail;