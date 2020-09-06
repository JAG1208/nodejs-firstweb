const express = require('express');
const router = express.Router();
//routes
router.get("/", (req, res) => {
    //  res.sendFile(path.join(__dirname, "/views/index.html"));
    res.render("index.html", {
        title: "first website"
    }); // no hace falta ponerle la extension ejs
});
router.get("/contact", (req, res) => {
    //  res.sendFile(path.join(__dirname, "/views/index.html"));
    res.render("contact.html", {
        title: "contact page"
    }); // no hace falta ponerle la extension ejs
});
router.get("/about", (req, res) => {
    //  res.sendFile(path.join(__dirname, "/views/index.html"));
    res.render("about.html", {
        title: "about page"
    }); // no hace falta ponerle la extension ejs
});
module.exports = router;