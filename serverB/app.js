var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
let Keycloak = require('keycloak-connect');
var session = require('express-session');

swaggerJsdoc = require ( "swagger-jsdoc" ), 
swaggerUi = require ( "swagger-ui-express" ); 

var indexRouter = require('./routes/index');
var UserRouter = require('./routes/users');
var OrderRouter = require('./routes/order');
var app = express();

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "S09 Service B with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MTA",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Military Technical Academy",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Methods","PUT, PATCH, DELETE");
//   next();
// });
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

var memoryStore = new session.MemoryStore();
let kcConfig = {
  "realm": "MyDemo",
  "auth-server-url": "http://localhost:8080",
  "ssl-required": "external",
  //  "credentials": {
  //   "secret": "WwbqZiWyrcOoitBW69jjIvMqQPSVrq4d"
  // },
  "confidential-port": 0,
  "policy-enforcer": {}
}
let keycloak = new Keycloak({ store: memoryStore }, kcConfig);

app.use(keycloak.middleware());

app.get('/',keycloak.protect(), function (req, res) {
  console.log(keycloak.protect())
  res.json("huyen trang dang test");
});
app.use('/user',keycloak.protect(), UserRouter);
app.use('/orders',keycloak.protect(), OrderRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;