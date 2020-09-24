import {
    request
} from './request'

export function getDetailData(iid) {
    return request({
        url: "/api/z8/detail",
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountBg = itemInfo.discountBgColor
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }


}
export class Shops {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}