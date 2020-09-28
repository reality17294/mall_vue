import {
    request
} from './request'

export function getRecommendData() {
    return request({
        url: '/api/z8/recommend'
    })
}