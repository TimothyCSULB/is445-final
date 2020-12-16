// Required modules 
const express = require("express");
const app = express();
const dblib = require("./dblib.js");

const multer = require("multer");
const upload = multer();

// Middleware
app.use(express.urlencoded({ extended: false }));

// Setup EJS
app.set("view engine", "ejs");

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.static("public"));

// Start listener
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started (http://localhost:3000/) !");
});

// Setup routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/sum", (req, res) => {
    res.render("sum");
})

app.post("/sum", upload.array(), async (req, res) => {
    
})

app.get("/import", async (req, res) => {
    const totRecs = await dblib.getTotalRecords();
    res.render("import", {
        totRecs: totRecs.totRecords
    });
})

app.post("/import",  upload.single('filename'), async (req, res) => {
    dblib.importFile(req.body)
        .then(result => res.send(result))
        .catch(err => res.send({trans: "Error", result: err.message}));
});