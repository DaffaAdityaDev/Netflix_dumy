import React, { useEffect, useState } from 'react';
import { IMAGE_BASE, getTvInformation, getCertificationInformation } from "../../pages/api/tmdb"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function BigBillboard() {
   
    
    const [tv, setTv] = useState(null)
    const [certificates, setCertification] = useState(null)

    const fetchTv = async () => {

        const response = await getTvInformation(94605)

        return response
    }

    const fetchCertification = async () => {
        const certificates = await getCertificationInformation(94605)

        return certificates
    }


    useEffect(() => {

        fetchTv().then(response => {
            setTv(response.data) 
        })

        fetchCertification().then(certificates => {
            setCertification(certificates.data)
        })

        return () => setTv(null),setCertification(null) 

    }, [])



    return (

        <div className="billboard-content-limits">
            <div className="billboard-base">
                <div className="billboard-image-wrapper">
                    <img src={`${IMAGE_BASE}original${tv && tv.backdrop_path}`} alt={"hero"} />

                    <div className="billboard-vignette"></div>
                    <div className="billboard-vignette-bottom"></div>
                    <div className="billboard-maturity-rating"><span>{certificates && certificates.results[0].rating}</span></div>

                </div>

                <div className="billboard-information">
                    <div className="logo-and-text">

                        <div className="billboard-title">
                            <h1>{`${tv && tv.name}`}</h1>
                        </div>

                        <div className="billboard-description">
                            <div className="episode-title-container"></div>
                            <div className="synopsis">{tv && tv.overview}</div>
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