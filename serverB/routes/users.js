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
 * /user:
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
router.get('/', function(req, res, next) {
  res.json(dataSet);
});

module.exports = router;
