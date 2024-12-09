const BlogsModel = require("../models/blogs-model.js");

exports.add = (request, response) => {
    const blogTitle = request.body.title;
    const blogContent = request.body.content;

    BlogsModel.add(blogTitle, blogContent, () => {
        response.end("ok");
    });
}

exports.getAll = (request, response) => {
    BlogsModel.getAll((data) => {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(data));
    });
}
