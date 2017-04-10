import axios from 'axios'
import { POST_CREATE_NEWS_URL } from '../api'
import { ADD_NEWS } from './types'

// export const selectNews = (newsId) => {
//     return {
//         type: SELECT_NEWS,
//         payload: newsId
//     }
// }

export const createNews = news => {
    console.log(news)
    const promise = axios.post(POST_CREATE_NEWS_URL, {
        "news_title": news.news_title,
        "news_text": news.news_text,
        "picture": "https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_0027.jpg",
        "category": news.category,
        "news_role": news.news_role
    })

    return (dispatch) => {
        promise.then(({data}) => {
            dispatch({
                type: ADD_NEWS,
                payload: data
            })
        })
    }
}