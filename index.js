const app = require('./app');
const port = process.env.port || 5000;
const { routeNotFound, errorHandler } = require('./Middlewares/ErrorHandlingMiddleware');
const userRouter = require('./Routers/UserRouter');
const dbConnection = require("./Utilities/DatabaseConnection")

// database connection
dbConnection();

app.use("/user", userRouter);

// custom error handler
app.use(routeNotFound);
app.use(errorHandler);
// listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`.bgMagenta.bold)
})