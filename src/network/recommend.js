import {
    request
} from './request'

export function getRecommendData() {
    return request({
        url: '/api/w6/recommend'
    })
}