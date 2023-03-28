// external modules
const express = require('express');
const path = require('path');

// internal modules
const app = require('./app');
const erroHandlerMiddleware = require('./Middlewares/errorHandlingMiddleware');
const userRouter = require('./Routers/user.router');
const homeRouter = require('./Routers/home.router')
const dbConnection = require("./Utilities/databaseConnection");
const jobRouter = require("./Routers/job.router")
const candidateRouter = require("./Routers/candidate.router")

// port
const port = process.env.port || 5000;

// database connection
dbConnection();

app.use("/", homeRouter)
app.use("/user", userRouter);
app.use("/job", jobRouter);
app.use("/candidate", candidateRouter);

// root folder
app.use(express.static(path.join(__dirname)));
// custom error handler
app.use(erroHandlerMiddleware.routeNotFound);
app.use(erroHandlerMiddleware.errorHandler);
// listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`.bgMagenta.bold)
})