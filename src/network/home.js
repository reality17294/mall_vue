// 关于首页的所有网络请求都放在这里

import {
  request
} from "network/request";

export function getHomeData() {
  return request({
    url: "/api/z8/home/multidata",
  })
}
export function getHomeGoodsData(type, page) {
  return request({
    url: "/api/z8/home/data",
    params: {
      type,
      page
    }
  })
}
