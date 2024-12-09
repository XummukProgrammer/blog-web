const React = require("react");
const BlogElement = require("./blog-element.jsx");

class BlogsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };

        fetch("http://localhost:3010/api/blogs/get_all")
            .then((res) => res.json())
            .then((result) => this.addBlog(result));
    }
    
    addBlog(result) {
        this.setState((state) => {
            return {
                blogs: result
            };
        });
    }
    
    render() {
        return (
            <div>
                {
                    this.state.blogs.map((blog) => (
                        <BlogElement title={blog.title} content={blog.content} />
                    ))
                }
            </div>
        );
    }
}
  
module.exports = BlogsContainer;
