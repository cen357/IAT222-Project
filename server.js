const express = require("express");
const mongoose = require("mongoose");
// const cors = require('cors');
const router = require("./routes/index");

const app = express();
const PORT = 3001;
const MONGODB_URI =
	"mongodb+srv://anthony:iat@newcluster.bcgbl.mongodb.net/iat222-project?retryWrites=true&w=majority";

// app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", function () {
	console.log("Connected to the Database.");
});
mongoose.connection.on("error", function (error) {
	console.log("Mongoose Connection Error : " + error);
});

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}.`);
});
