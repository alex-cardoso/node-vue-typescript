import express from "express";
import routerMain from "../routes/main";
import path from "path";
import expressHandlebars from "express-handlebars";

const app = express();

const handlebars = expressHandlebars.create({
  partialsDir: path.join(__dirname, "../", "views/partials"),
});

app.use(express.static(path.join(__dirname, "../../frontend/", "dist/")));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use("/", routerMain);

export default app;
