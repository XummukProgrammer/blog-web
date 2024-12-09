const express = require("express")
const BlogsController = require("../controllers/blogs-controller.js");

const urlencodedParser = express.urlencoded({extended: false});

const router = express.Router();
router.post("/add", urlencodedParser, BlogsController.add);
router.get("/get_all", BlogsController.getAll);

exports.router = router;
