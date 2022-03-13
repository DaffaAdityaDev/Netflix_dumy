import React, { useEffect, useState, useContext } from 'react';
import { getMoviesBy } from "../../pages/api/tmdb"
import BigBillboard from "../BigBillboard"
import Slider from "../Slider"
import Search from '../Search';
import SearchContext from "../Search/context"


function Landing() {

    const [popularMovies, setPopularMovies] = useState(null)
    const [bestMovies, setBestMovies] = useState(null)
    const [animationMovies, setAnimationMovies] = useState(null)

    const searchContext = useContext(SearchContext)


    const fetchMovies = async () => { 
        let popularMovies = await getMoviesBy("populares")
        let animationMovies = await getMoviesBy("animation")
        let bestMovies = await getMoviesBy("best")

        return { popularMovies, animationMovies, bestMovies }
    }

    useEffect(() => {

        fetchMovies().then(response => {
            

            setPopularMovies(response.popularMovies.results)
            setAnimationMovies(response.animationMovies.results)
            setBestMovies(response.bestMovies.results)

        })


        return () => {
            setPopularMovies(null)
            setAnimationMovies(null)
            setBestMovies(null)
        }


    }, [])

    return (

        <div>

            {searchContext.searchInput.length > 0 ? (<Search />) : (
                <div>

                    <BigBillboard />

                    {popularMovies && <Slider mainTitle={"Trending now"} data={popularMovies} poster={true} />}

                    {animationMovies && <Slider mainTitle={"Anime"} data={animationMovies} poster={true} />}

                    {bestMovies && <Slider mainTitle={"best 2021 movies"} data={bestMovies} poster={true} />}

                </div>
            )}

        </div>


    );
}

export default Landing;