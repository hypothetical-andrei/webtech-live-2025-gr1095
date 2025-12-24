require("dotenv").config();
const winston = require('winston');
const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");

const app = express();


const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({ filename: 'requests.log', level: 'info' }),
  ],
});

//implement a middleware that logs to the console the method and url of each request that is made to the server
const loggingMiddleware = (req, res, next) => {
    // console.log(`${req.method} ${req.url}`);
    console.log('LOGGING')
    logger.log({
    level: 'info',
    message: `${req.method} ${req.url}`
    });
    next();
};

app.use(loggingMiddleware);

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

//additional error handler before the existing one that logs to the console the stack of the error (err.stack).
// app.use((err, req, res, next) => {
//     console.log(err.stack)
//     res.status(500).json({ Error: "ERR" })
// })

//error middleware
app.use((err, req, res, next) => {
    res.status(500).json({ Error: "Something broke!" })
})

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});