const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(options));

const routes = require("./routes/index");
app.use(routes);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
