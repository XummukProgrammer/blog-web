const React = require("react");
const BlogsContainer = require("../blogs/blogs-container.jsx");

class BlogsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="/add_blog_page">Добавить блог</a>

                <BlogsContainer />
            </div>
        );
    }
}
  
module.exports = BlogsPage;
