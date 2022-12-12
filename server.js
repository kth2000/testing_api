const express = require("express");
const app = express();
const routes = require("./route");
app.use("/api", routes);
app.listen(8000, function() {
 console.log("Server running at port 8000...");
});