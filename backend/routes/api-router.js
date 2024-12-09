const express = require("express")
const BlogsRouter = require("./blogs-router.js");

const router = express.Router();
router.use("/blogs", BlogsRouter.router);

exports.router = router;
