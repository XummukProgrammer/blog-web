const React = require("react");  
const { Route, Routes, Link } = require("react-router");
const { BrowserRouter } = require("react-router-dom");
const MainPage = require("../pages/main-page.jsx");
const BlogsPage = require("../pages/blogs-page.jsx");
const AddBlogPage = require("../pages/add-blog-page.jsx");

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/blogs">Блоги</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={ <MainPage /> } />
                        <Route path="/blogs" element={ <BlogsPage /> } />
                        <Route path="/add_blog_page" element={ <AddBlogPage /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
  
module.exports = Navigation;
