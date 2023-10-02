const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI = "mongodb://localhost/recipe-site";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((err) => console.log("Connection Failed.", err));

module.exports = mongoose;
