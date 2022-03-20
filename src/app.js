import express from "express";
import { create } from "express-handlebars";
import config from "./config";
import path from "path";

import indexRoutes from "./routes/index.routes";
import usersRoutes from "./routes/users.routes";
import morgan from "morgan";

const app = express();

// Setting
app.set("port", config.port);
app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(app.get("views"), "static")));

// Routes
app.use(indexRoutes);
app.use(usersRoutes);

export default app;
