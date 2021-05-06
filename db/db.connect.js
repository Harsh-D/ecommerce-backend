const mongoose = require("mongoose")

// TODO: move to .env/sec
// TODO: use async await instead of then/catch
function initializeDBConnection() {
  // Connecting to DB
  mongoose.connect("mongodb+srv://harshD:deshpande100@neog-cluster.hbcvp.mongodb.net/inventory", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log("successfully connected"))
    .catch(error => console.error("mongoose connection failed...", error))
}

module.exports = { initializeDBConnection }

"mongodb+srv://harshD:<password>@neog-cluster.hbcvp.mongodb.net/test"