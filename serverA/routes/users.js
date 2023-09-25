/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: Create a new user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 *
 */
const axios = require('axios')
const FormData = require('form-data');
var express = require('express');
var router = express.Router();

/* GET users listing. */
const dataSet = {
  labels: ["02.05","03.05", "04.05","05.05", "06.05", "07.05", "08.05", "09.05","10.05", "11.05","12.05","13.05","14.05", "15.05"], 
  dataUnit: '',
  dataSets: [
    {
    backgroundColor: "rgba(121, 139, 255, 0.15)",
    borderCapStyle: "square",
    borderColor: "#9d72ff",
    borderWidth: 2,
    color: "#798bff",
    dash: 0,
    data: [0, 1439, 3173, 1861, 1166, 2513, 912, 1830, 1217, 1573, 4480, 2590, 3325, 0],
    label: "Current",
    lineTension: 0,
    pointBackgroundColor: "transparent",
    pointBorderColor: "transparent",
    pointBorderWidth:2,
    pointHitRadius: 4,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "#9d72ff",
    pointHoverBorderWidth: 2,
    pointHoverRadius: 4,
    pointRadius: 4},
    {
      backgroundColor: "transparent",
      borderColor: "#9d72ff",
      borderDash: [5],
      borderWidth: 2,
      data: [1210, 1189, 1108, 1205, 1355, 1545, 1692, 2516, 5, 1920, 1475, 129, 1994, 1636],
      fill: false,
      label: "Prev",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointBorderWidth: 2,
      pointHitRadius: 4,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#9d72ff",
      pointHoverBorderWidth: 2,
      pointHoverRadius: 4,
      pointRadius: 4,
    }
  ]
}
const AUTH_TOKEN = ''
function getQueryString(data = {}) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
async function getAccessToken(){
  const data = {
    client_id: 'my-react-app',
    username: 'changchang',
    password: '12345678',
    grant_type: 'password',
  };
  
  // const form_data = new FormData();
  //   form_data.append('client_id', 'my-react-app');
  //   form_data.append('username', 'changchang');
  //   form_data.append('password', '12345678');
  //   form_data.append('grant_type', 'password');
    return res = await axios.post('http://localhost:8080/realms/MyDemo/protocol/openid-connect/token', data, 
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
    return res = await axios.get('http://localhost:9000/user', 
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
