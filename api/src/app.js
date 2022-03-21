import express from "express";
import config from "./config";
import morgan from "morgan";
import path from 'path'

import usersRoutes from "./routes/users.routes";
import authRotues from "./routes/auth.routes";

const app = express();

// Setting
app.set("port", config.port);

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use("/api/auth", authRotues);

export default app;
