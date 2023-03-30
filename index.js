// external modules
const express = require("express");
const path = require("path");

// internal modules
const app = require("./app");
const erroHandlerMiddleware = require("./Middlewares/errorHandlingMiddleware");
const userRouter = require("./Routers/user.router");
const homeRouter = require("./Routers/home.router");
const dbConnection = require("./Utilities/databaseConnection");
const jobsRouter = require("./Routers/jobs.router");
const candidateRouter = require("./Routers/candidate.router");
const managerRouter = require("./Routers/manager.router");
const adminRouter = require("./Routers/admin.router");

// port
const port = process.env.port || 5000;

// database connection
dbConnection();

// routes
app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/jobs", jobsRouter);
app.use("/manager", managerRouter);
app.use("/candidate", candidateRouter);
app.use("/admin", adminRouter);

// root folder
app.use(express.static(path.join(__dirname)));
// custom error handler
app.use(erroHandlerMiddleware.routeNotFound);
app.use(erroHandlerMiddleware.errorHandler);
// listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`.bgMagenta.bold);
});
