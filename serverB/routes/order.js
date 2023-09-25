/**
 * @swagger
 * components:
 *   schemas:
 *     Orders:
 */
/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: The orders API 
 * /orders:
 *   get:
 *     summary: List order of customer
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Some server error
 *
 */
var express = require('express');
var router = express.Router();


const data = {
    "current_page": 1,
    "data": [
        {
            "_id": "63161fc8ae2a091c7904cd64",
            "user_id": "63161a566916661331025419",
            "order_ship": {
                "name": "Hải Nguyễn",
                "phone": "0943889033",
                "province": {
                    "id": 1,
                    "name": "Thành phố Hà Nội"
                },
                "district": {
                    "id": 1,
                    "name": "Quận Ba Đình"
                },
                "address": "76 cự lộc",
                "fee": 0,
                "discount": 0
            },
            "order_items": [
                {
                    "product_id": "6312c0a5d916999d02071f56",
                    "product_name": "test",
                    "product_image": "https://faster.cdn.so9.vn/images/628c7e9ca05a926caa09caa5/product/7d5b39596f72ca5e9e7a73ad59ca5d60.png",
                    "price_import": "111111",
                    "price_sale": "22220",
                    "number_item": 1
                }
            ],
            "total_amount": 22220,
            "project_id": "628c7e9ca05a926caa09caa5",
            "status": 1,
            "creator_id": 16,
            "logs": [
                "16.Vũ Khánh vừa tạo đơn hàng"
            ],
            "updated_at": "2022-09-05T16:11:52.443000Z",
            "created_at": "2022-09-05T16:11:52.436000Z",
            "code": "MDH10220"
        },
        {
            "_id": "6314bce0d58c9a004003899d",
            "user_id": "6314b4cec25fd27b820b184b",
            "order_ship": {
                "name": "Lan Võ",
                "phone": "0977889542",
                "province": {
                    "id": 18,
                    "name": "Tỉnh Bắc Ninh"
                },
                "district": {
                    "id": 196,
                    "name": "Huyện Quế Võ"
                },
                "address": "Xã Xuồng Lã",
                "fee": "15000",
                "discount": 0
            },
            "order_items": [
                {
                    "product_id": "630d855da1bb408310043812",
                    "product_name": "Bánh trung thu kinh đô",
                    "product_image": "https://dev-faster.cdn.so9.vn/images/628c7e9ca05a926caa09caa5/product/bf71e359835420935ed62002f726a25b.webp",
                    "price_import": "560000",
                    "price_sale": "489000",
                    "number_item": 1
                }
            ],
            "total_amount": 504000,
            "project_id": "628c7e9ca05a926caa09caa5",
            "status": 1,
            "creator_id": 16,
            "logs": [
                "16.Vũ Khánh vừa tạo đơn hàng"
            ],
            "updated_at": "2022-09-04T14:57:36.770000Z",
            "created_at": "2022-09-04T14:57:36.766000Z",
            "code": "MDH7861"
        },
        {
            "_id": "6314bcb885fd4127d70a016b",
            "user_id": "6314b4cec25fd27b820b184b",
            "order_ship": {
                "name": "Lan Võ",
                "phone": "0977889542",
                "province": {
                    "id": 27,
                    "name": "Tỉnh Nghệ An"
                },
                "district": {
                    "id": 315,
                    "name": "Huyện Nam Đàn"
                },
                "address": "Xóm 10, Xã Xuân Hòa",
                "fee": "13000",
                "discount": "10000"
            },
            "order_items": [
                {
                    "product_id": "630e3e4fbc4eacfa7e0d427c",
                    "product_name": "Chân váy xếp li dài (Size: L)",
                    "product_image": "https://dev-faster.cdn.so9.vn/images/628c7e9ca05a926caa09caa5/product/3f8d527a68bd9849701a02c97ba27b58.webp",
                    "price_import": "120000",
                    "price_sale": "95600",
                    "number_item": 1
                },
            ]
        }
    ]
}

router.get('/', function(req, res, next) {
    res.json(data);
  });
  
  module.exports = router;
  