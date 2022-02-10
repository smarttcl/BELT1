const express = require("express");
const app = express();
const port = 8001
const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended:true}));
require("./server/routes/pirate.routes")(app);

app.listen(port, () => console.log(`running on ${port} is a new way I like to be!!!`))