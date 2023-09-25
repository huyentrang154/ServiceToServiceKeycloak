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
 *   description: The orders API from SERVICE B 
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
const axios = require('axios')
const FormData = require('form-data');
var express = require('express');
var router = express.Router();


const AUTH_TOKEN = ''
function getQueryString(data = {}) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
// Lấy token thông qua xác thực với máy chủ keycloak
async function getAccessToken(){
  const data = {
    client_id: 'my-react-app',
    username: 'changchang',
    password: '12345678',
    grant_type: 'password',
  };
  
    return res = await axios.post('http://localhost:8080/realms/MyDemo/protocol/openid-connect/token', 
    data, 
    {
      headers : {
        "Content-Type" : "application/x-www-form-urlencoded"
      },
      withCredentials: true,
      transformRequest: getQueryString
    })
}

async function doPostRequest(){
  let token = await getAccessToken();
    return res = await axios.get('http://localhost:9000/orders', 
    {
      headers : {
        "Authorization": "Bearer " + token.data.access_token,
      },
    })
}

router.get('/',async function(req, res, next) {
  let data = await doPostRequest();
  console.log(data.data)
  res.json(data.data);
});

module.exports = router;

