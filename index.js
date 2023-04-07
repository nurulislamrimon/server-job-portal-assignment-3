// external modules
const express = require("express");
const path = require("path");

// internal modules
const app = require("./app");
const erroHandlerMiddleware = require("./middlewares/error_handling_middleware");
const userRouter = require("./routers/user.router");
const homeRouter = require("./routers/home.router");
const jobsRouter = require("./routers/jobs.router");
const candidateRouter = require("./routers/candidate.router");
const managerRouter = require("./routers/manager.router");
const adminRouter = require("./routers/admin.router");
const dbConnection = require("./utilitis/database_connection");

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
