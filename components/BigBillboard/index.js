import React, { useEffect, useState } from 'react';
import { getMovieInformation, IMAGE_BASE } from "../../pages/api/tmdb"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function BigBillboard() {
   
    
    const [movie, setMovie] = useState(null)

    const fetchMovie = async () => {

        const response = await getMovieInformation(128)

        return response
    }

    useEffect(() => {


        fetchMovie().then(response => {
            setMovie(response.data)

        })

        return () => setMovie(null)

    }, [])
    
    return (

        <div className="billboard-content-limits">
            <div className="billboard-base">
                <div className="billboard-image-wrapper">
                    <img src={`${IMAGE_BASE}original${movie && movie.backdrop_path}`} alt={"hero"} />

                    <div className="billboard-vignette"></div>
                    <div className="billboard-vignette-bottom"></div>
                    <div className="billboard-maturity-rating"><span>+13</span></div>

                </div>

                <div className="billboard-information">
                    <div className="logo-and-text">

                        <div className="billboard-title">
                            <h1>{`${movie && movie.title}`}</h1>
                        </div>

                        <div className="billboard-description">
                            <div className="episode-title-container"></div>
                            <div className="synopsis">{movie && movie.overview}</div>
                        </div>

                        <div className="billboard-link">
                            <a className="play-link" href={"/"} >
                                <button className="hasLabel">
                                    <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                    <span>Play</span>
                                </button>
                            </a>

                            <button className="hasLabel play-link-secondary">
                                <span className="play-icon"><FontAwesomeIcon icon={faQuestionCircle} /></span>
                                <span>Information</span>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>





    );
}

export default BigBillboard;