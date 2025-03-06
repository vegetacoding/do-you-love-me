const express = require("express");
const path = require("path");
const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static("public"));
app.use("/img", express.static("img"));

// Routes
app.get("/", (req, res) => {
  const images = [
    "i-love-you-gif-1.gif",
    "images (1).jpg",
    "c5b84896be3f2686c01d9eeb86d27658.gif",
    "200w.gif",
    "429a890a39e70d522d52c7e52bce8535.gif",
  ];
  res.render("index", { images });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
