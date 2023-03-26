const app = require('./app');
const port = process.env.port || 5000;
const erroHandlerMiddleware = require('./Middlewares/errorHandlingMiddleware');
const userRouter = require('./Routers/user.router');
const homeRouter = require('./Routers/home.router')
const dbConnection = require("./Utilities/databaseConnection");
const jobRouter = require("./Routers/job.router")


// database connection
dbConnection();

app.use("/", homeRouter)
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);

// custom error handler
app.use(erroHandlerMiddleware.routeNotFound);
app.use(erroHandlerMiddleware.errorHandler);
// listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`.bgMagenta.bold)
})