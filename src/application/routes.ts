import app from "./app";
import exampleRouter from "./controllers/example.controller";

app.use("/example/", exampleRouter);
