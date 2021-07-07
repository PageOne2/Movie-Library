const apiKey = process.env.REACT_APP_API_KEY;
const apiBase = 'https://api.themoviedb.org/3';

const apiReq = async (endpoint) => {
    let resp = await fetch(`${apiBase}${endpoint}`);
    let json = await resp.json();
    return json;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Popular',
                title: 'Popular',
                item: await apiReq(`/movie/popular?api_key=${apiKey}`),
                id: 0
            },
            {
                slug: 'action',
                title: 'Action',
                item: await apiReq(`/discover/movie?with_genre=28&api_key=${apiKey}`),
                id: 28
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                item: await apiReq(`/discover/movie?with_genre=35&api_key=${apiKey}`),
                id: 35
            },
            {
                slug: 'horror',
                title: 'Horror',
                item: await apiReq(`/discover/movie?with_genre=27&api_key=${apiKey}`),
                id: 27
            },
            {
                slug: 'romance',
                title: 'Romance',
                item: await apiReq(`/discover/movie?with_genre=10749&api_key=${apiKey}`),
                id: 10402
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                item: await apiReq(`/discover/movie?with_genre=99&api_key=${apiKey}`),
                id: 99
            },
        ];
    },

    getMovies: async (str, id, page) => {
        if (id === 0) {
            return await apiReq(`/movie/popular?api_key=${apiKey}&page=${page}&include_adult=false`)
        } else if (id > 0) {
            return await apiReq(`/discover/movie?with_genres=${id}&api_key=${apiKey}&page=${page}&include_adult=false`)
        } else if (str !== "") {
            return await apiReq(`/search/movie?query=${str}&api_key=${apiKey}&language=en-US&page=${page}&include_adult=false`)
        } else {
            return false
        }
    },

    getTrailer: async (id) => {
        if (id !== undefined) {
            let result = await apiReq(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            if (result.status_code) {
                return "false"
            } else if (result.results.length === 0) {
                return 'false'
            } else {
                return result.results[0].key
            }
        } else {
            return
        }
    },
}