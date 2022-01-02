import axios from "axios"

const API = process.env.API_KEY
const URL = "https://api.themoviedb.org/3/"
export const IMAGE_BASE = "https://image.tmdb.org/t/p/"

export async function getMovieInformation(id) {

    return await axios.get(`${URL}movie/${id}?${API}&append_to_response=images,credits,similar`)

}

export async function getTvInformation(id) {

    return await axios.get(`${URL}tv/${id}?${API}&append_to_response=images,credits,similar`)
        
    
}

export async function getCertificationInformation(id) {
    return await axios.get(`${URL}/tv/${id}/content_ratings?${API}`)
}


export async function searchMoviesBy(text, page = 1) {

    return await axios.get(`${URL}search/movie?${API}&language=en-US&query=${text}&page=${page}&include_adult=false`)

}

export async function getMoviesByGenre(genre) {

    return await axios.get(`${URL}discover/movie?with_genres=18&sort_by=popularity.desc&${API}`)

}


export async function getMoviesBy(type) {

    let discover = null

    switch (type) {
        case "best":
            discover = `${URL}discover/movie?primary_release_year=2021&vote_average.gte=8&${API}`
            break;
        case "populares":
            discover = `${URL}discover/movie?sort_by=popularity.desc&${API}`
            break;
        case "animation":
            discover = `${URL}discover/movie?&${API}&with_genres=16&with_original_language=ja`
            break;
        default:
            discover = `${URL}discover/movie?primary_release_year=2021&sort_by=popularity.desc&${API}`

    }


    return await axios.get(discover)
        .then(function (response) {

            return response.data

        })


}